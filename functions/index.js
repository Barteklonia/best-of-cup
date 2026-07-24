const { onSchedule } = require("firebase-functions/v2/scheduler");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

const TEAMS_2016 = [
    { id: '01OSL7D9PG000000VV0AG80NVT74RFIN', name: 'TSV Meerbusch' },
    { id: '02VTS2KMKC000000VS5489BRVT7AVBJ7', name: 'FC Dönberg' },
    { id: '011MIF5NBC000000VTVG0001VTR8C1K7', name: 'SC Velbert' },
    { id: '011MI9O7BK000000VTVG0001VTR8C1K7', name: 'SF Vorst' },
    { id: '011MIAMB8C000000VTVG0001VTR8C1K7', name: 'ETB Essen' },
    { id: '011MIA8JB4000000VTVG0001VTR8C1K7', name: 'DSC 99 Düsseldorf' },
    { id: '011MIC1I8G000000VTVG0001VTR8C1K7', name: 'VfB Hilden' },
    { id: '011MI9UHE0000000VTVG0001VTR8C1K7', name: 'GSG Duisburg' },
    { id: '011MIBN6T4000000VTVG0001VTR8C1K7', name: 'SF Baumberg' }
];

const TEAMS_2014 = [
    { id: '011MIAFPNC000000VTVG0001VTR8C1K7', name: 'SF Vorst' },
    { id: '011MIEUCVS000000VTVG0001VTR8C1K7', name: 'DSC Düsseldorf' },
    { id: '011MI9UGIS000000VTVG0001VTR8C1K7', name: 'SG Unterrath' },
    { id: '011MIBT1F4000000VTVG0001VTR8C1K7', name: 'SV Wersten 04' },
    { id: '011MIA3JES000000VTVG0001VTR8C1K7', name: 'SV Straelen' },
    { id: '011MICSVKS000000VTVG0001VTR8C1K7', name: 'SGS Essen' }
];

const teamKeywords2016 = ['Meerbusch', 'Dönberg', 'Velbert', 'Vorst', 'Essen', 'DSC 99', 'Hilden', 'Duisburg', 'Baumberg'];
const teamKeywords2014 = ['Vorst', 'DSC 99', 'Unterrath', 'Wersten 04', 'Straelen', 'Schönebeck', 'Essen'];

async function fetchMatchplan(teamId) {
    try {
        const res = await fetch(`https://www.fussball.de/ajax.team.matchplan/-/mode/PAGE/team-id/${teamId}`);
        return await res.text();
    } catch(e) {
        console.error("Fetch matchplan error", e);
        return "";
    }
}

async function scrapeAgeGroup(teams, keywords) {
    const matchesFound = [];
    
    for (const team of teams) {
        const html = await fetchMatchplan(team.id);
        const rows = html.split('<tr');
        
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            if (row.includes('Absetzung') || row.includes('Abgesagt')) continue;
            
            let matchedKeywords = [];
            for (const keyword of keywords) {
                if (row.includes(keyword)) {
                    matchedKeywords.push(keyword);
                }
            }
            
            if (matchedKeywords.length >= 2) {
                const dateMatch = row.match(/class="date-format">([^<]+)<\/span>/);
                const timeMatch = row.match(/class="time-format">([^<]+)<\/span>/);
                const linkMatch = row.match(/href="([^"]+)"\s*class="[^"]*btn-game-detail/);
                
                if (dateMatch && timeMatch && linkMatch) {
                    const date = dateMatch[1].trim();
                    const time = timeMatch[1].trim();
                    let link = linkMatch[1];
                    if (link.startsWith('//')) link = 'https:' + link;
                    
                    if (!matchesFound.some(m => m.link === link)) {
                        try {
                            const detailRes = await fetch(link);
                            const detailHtml = await detailRes.text();
                            const locMatch = detailHtml.match(/class="location">\s*([^<]+)\s*</);
                            const location = locMatch ? locMatch[1].trim() : "Unknown";
                            
                            const team1 = matchedKeywords[0];
                            const team2 = matchedKeywords[1];
                            
                            matchesFound.push({
                                team1,
                                team2,
                                date,
                                time,
                                location,
                                link
                            });
                        } catch(e) {
                            console.error("Fetch detail error", e);
                        }
                    }
                }
            }
        }
    }
    return matchesFound;
}

function getFullTeamName(keyword, ageGroup) {
    if (ageGroup === 2016) {
        if (keyword === 'Meerbusch') return 'TSV Meerbusch';
        if (keyword === 'Dönberg') return 'FC Dönberg';
        if (keyword === 'Velbert') return 'SC Velbert';
        if (keyword === 'Vorst') return 'SF Vorst';
        if (keyword === 'Essen') return 'ETB Essen';
        if (keyword === 'DSC 99') return 'DSC 99 Düsseldorf';
        if (keyword === 'Hilden') return 'VfB Hilden';
        if (keyword === 'Duisburg') return 'GSG Duisburg';
        if (keyword === 'Baumberg') return 'SF Baumberg';
    } else {
        if (keyword === 'Vorst') return 'SF Vorst';
        if (keyword === 'DSC 99') return 'DSC Düsseldorf';
        if (keyword === 'Unterrath') return 'SG Unterrath';
        if (keyword === 'Wersten 04') return 'SV Wersten 04';
        if (keyword === 'Straelen') return 'SV Straelen';
        if (keyword === 'Schönebeck' || keyword === 'Essen') return 'SGS Essen';
    }
    return keyword;
}

exports.scrapeMatches = onSchedule({
    schedule: "0 3 * * *", // Every day at 3 AM
    timeZone: "Europe/Berlin",
    timeoutSeconds: 300,
    memory: "256MiB"
}, async (event) => {
    console.log("Starting daily fussball.de scrape...");
    
    const matches2016 = await scrapeAgeGroup(TEAMS_2016, teamKeywords2016);
    const matches2014 = await scrapeAgeGroup(TEAMS_2014, teamKeywords2014);
    
    const batch = db.batch();
    
    for (const match of matches2016) {
        const t1 = getFullTeamName(match.team1, 2016);
        const t2 = getFullTeamName(match.team2, 2016);
        const teamsSorted = [t1, t2].sort();
        const matchId = `${teamsSorted[0]}_${teamsSorted[1]}`;
        
        const ref = db.collection('match_dates').doc(matchId);
        batch.set(ref, {
            team1: teamsSorted[0],
            team2: teamsSorted[1],
            date: match.date,
            time: match.time,
            location: match.location,
            ageGroup: 2016,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    }
    
    for (const match of matches2014) {
        const t1 = getFullTeamName(match.team1, 2014);
        const t2 = getFullTeamName(match.team2, 2014);
        const teamsSorted = [t1, t2].sort();
        const matchId = `${teamsSorted[0]}_${teamsSorted[1]}`;
        
        const ref = db.collection('match_dates').doc(matchId);
        batch.set(ref, {
            team1: teamsSorted[0],
            team2: teamsSorted[1],
            date: match.date,
            time: match.time,
            location: match.location,
            ageGroup: 2014,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    }
    
    await batch.commit();
    console.log(`Scraping finished. Updated ${matches2016.length + matches2014.length} matches.`);
});
