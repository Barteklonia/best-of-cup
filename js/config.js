// Centralized Configuration for Best of Cup

// Dynamic Round Robin Schedule Generator (Berger-System / Circle Method)
function generateSchedule(teamsObj) {
    const list = Object.keys(teamsObj);
    let numTeams = list.length;
    
    // Add a dummy team for odd number of teams to simulate "Spielfrei"
    if (numTeams % 2 !== 0) {
        list.push(null);
        numTeams++;
    }
    
    const schedule = [];

    for (let round = 0; round < (numTeams - 1) * 2; round++) {
        const matches = [];
        const isHinrunde = round < numTeams - 1;
        const actualRound = isHinrunde ? round : round - (numTeams - 1);

        for (let i = 0; i < numTeams / 2; i++) {
            const homeIdx = (actualRound + i) % (numTeams - 1);
            let awayIdx = (actualRound + numTeams - 1 - i) % (numTeams - 1);
            let home, away;

            if (i === 0) {
                awayIdx = numTeams - 1;
                // Alternate home/away rights for the pivot team
                const pivotHome = actualRound % 2 === 1;
                home = pivotHome ? awayIdx : homeIdx;
                away = pivotHome ? homeIdx : awayIdx;
            } else {
                // Alternate home/away rights for the rest to minimize streaks
                if (i % 2 === 1) {
                    home = awayIdx;
                    away = homeIdx;
                } else {
                    home = homeIdx;
                    away = awayIdx;
                }
            }

            // Swap home and away for the Rückrunde
            if (!isHinrunde) {
                const temp = home;
                home = away;
                away = temp;
            }

            // Handle dummy team for "Spielfrei"
            if (list[home] === null) {
                matches.push([list[away], null]);
            } else if (list[away] === null) {
                matches.push([list[home], null]);
            } else {
                matches.push([list[home], list[away]]);
            }
        }

        schedule.push({
            name: `${round + 1}. Spieltag`,
            matches: matches
        });
    }
    return schedule;
}

const CUP_DATA = {
    seasons: {
        "2025_2026": {
            displayName: "Saison 25/26",
            ageGroups: {
                "2014": {
                    displayName: "Jahrgang 2014",
                    teams: {
                        "SV Lohausen": { logo: "assets/wappen-lohausen.png" },
                        "SF Vorst": { logo: "assets/wappen-vorst.png" },
                        "SG Unterrath": { logo: "assets/wappen-unterrath.png" },
                        "1. FC MG": { logo: "assets/wappen-1fcmg.png" }
                    },
                    schedule: [
                        { name: "1. Spieltag", matches: [["SV Lohausen", "SF Vorst"], ["SG Unterrath", "1. FC MG"]] },
                        { name: "2. Spieltag", matches: [["SV Lohausen", "SG Unterrath"], ["SF Vorst", "1. FC MG"]] },
                        { name: "3. Spieltag", matches: [["SF Vorst", "SG Unterrath"], ["1. FC MG", "SV Lohausen"]] },
                        { name: "4. Spieltag", matches: [["SV Lohausen", "1. FC MG"], ["SG Unterrath", "SF Vorst"]] },
                        { name: "5. Spieltag", matches: [["SF Vorst", "SV Lohausen"], ["1. FC MG", "SG Unterrath"]] },
                        { name: "6. Spieltag", matches: [["SG Unterrath", "SV Lohausen"], ["1. FC MG", "SF Vorst"]] }
                    ]
                }
            }
        },
        "2026_2027": {
            displayName: "Saison 26/27",
            ageGroups: {
                "2014": {
                    displayName: "Jahrgang 2014",
                    teams: {
                        "SF Vorst": { logo: "assets/wappen-vorst.png" },
                        "SG Unterrath": { logo: "assets/wappen-unterrath.png" },
                        "DSC Düsseldorf": { logo: "assets/wappen-duesseldorf-sc-99.png" },
                        "SV Straelen": { logo: "assets/wappen-sv_straelen.png" },
                        "SV Wersten 04": { logo: "assets/wappen-sv_wersten_04_duesseldorf.png" },
                        "SGS Essen": { logo: "assets/wappen-sgs_essen.png" }
                    },
                    schedule: [
                        { name: "1. Spieltag", matches: [["SF Vorst", "SGS Essen"], ["SV Wersten 04", "SG Unterrath"], ["DSC Düsseldorf", "SV Straelen"]] },
                        { name: "2. Spieltag", matches: [["SG Unterrath", "SGS Essen"], ["SF Vorst", "DSC Düsseldorf"], ["SV Straelen", "SV Wersten 04"]] },
                        { name: "3. Spieltag", matches: [["SGS Essen", "DSC Düsseldorf"], ["SV Straelen", "SG Unterrath"], ["SV Wersten 04", "SF Vorst"]] },
                        { name: "4. Spieltag", matches: [["SGS Essen", "SV Straelen"], ["DSC Düsseldorf", "SV Wersten 04"], ["SF Vorst", "SG Unterrath"]] },
                        { name: "5. Spieltag", matches: [["SV Wersten 04", "SGS Essen"], ["SF Vorst", "SV Straelen"], ["SG Unterrath", "DSC Düsseldorf"]] },
                        { name: "6. Spieltag", matches: [["SGS Essen", "SF Vorst"], ["SG Unterrath", "SV Wersten 04"], ["SV Straelen", "DSC Düsseldorf"]] },
                        { name: "7. Spieltag", matches: [["SGS Essen", "SG Unterrath"], ["DSC Düsseldorf", "SF Vorst"], ["SV Wersten 04", "SV Straelen"]] },
                        { name: "8. Spieltag", matches: [["DSC Düsseldorf", "SGS Essen"], ["SG Unterrath", "SV Straelen"], ["SF Vorst", "SV Wersten 04"]] },
                        { name: "9. Spieltag", matches: [["SV Straelen", "SGS Essen"], ["SV Wersten 04", "DSC Düsseldorf"], ["SG Unterrath", "SF Vorst"]] },
                        { name: "10. Spieltag", matches: [["SGS Essen", "SV Wersten 04"], ["SV Straelen", "SF Vorst"], ["DSC Düsseldorf", "SG Unterrath"]] }
                    ]
                },
                "2016": {
                    displayName: "Jahrgang 2016",
                    teams: {
                        "FC Dönberg": { logo: "assets/wappen-fc_doenberg.png" },
                        "SF Baumberg": { logo: "assets/wappen-sf_baumberg.png" },
                        "ETB Essen": { logo: "assets/wappen-etb_sw_essen.svg" },
                        "SC Velbert": { logo: "assets/wappen-sc_velbert.jpg" },
                        "TSV Meerbusch": { logo: "assets/wappen-tsv_meerbusch.png" },
                        "SF Vorst": { logo: "assets/wappen-vorst.png" },
                        "DSC 99 Düsseldorf": { logo: "assets/wappen-duesseldorf-sc-99.png" },
                        "VfB Hilden": { logo: "assets/wappen-vfb_hilden.png" },
                        "GSG Duisburg": { logo: "assets/wappen-gsg_duisburg.png" }
                    },
                    schedule: [] // Generated programmatically below
                }
            }
        }
    }
};

// Programmatically generate schedule for Jahrgang 2016 in Saison 26/27
CUP_DATA.seasons["2026_2027"].ageGroups["2016"].schedule = generateSchedule(CUP_DATA.seasons["2026_2027"].ageGroups["2016"].teams);

// Global list of upcoming games across all seasons/age groups
const UPCOMING_GAMES = [
    {
        saison: "2025_2026",
        jahrgang: "2014",
        date: "2026-05-31",
        displayDate: "Sonntag, 31.05, 10:00 Uhr",
        match: "SF Vorst vs SV Lohausen"
    },
    {
        saison: "2025_2026",
        jahrgang: "2014",
        date: "2026-06-14",
        displayDate: "Sonntag, 14.06, 15:00 Uhr",
        match: "1. FC MG vs SV Lohausen"
    },
    {
        saison: "2026_2027",
        jahrgang: "2014",
        date: "2026-09-06",
        displayDate: "Sonntag, 06.09, 11:00 Uhr",
        match: "SV Lohausen vs SF Vorst"
    }
];
