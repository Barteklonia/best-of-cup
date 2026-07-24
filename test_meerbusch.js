const TEAMS_2016 = [
    { id: '01OSL7D9PG000000VV0AG80NVT74RFIN', name: 'TSV Meerbusch' }
];
const teamKeywords2016 = ['Meerbusch', 'Dönberg', 'Velbert', 'Vorst', 'Essen', 'DSC 99', 'Hilden', 'Duisburg', 'Baumberg'];

async function test() {
    const html = require('fs').readFileSync('meerbusch.html', 'utf8');
    const rows = html.split('<tr');
    
    let currentDate = '';
    let currentTime = '';
    
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        
        if (row.includes('row-headline visible-small')) {
            const headlineMatch = row.match(/<td[^>]*>([^<]+)<\/td>/);
            if (headlineMatch) {
                const text = headlineMatch[1]; 
                const dateMatch = text.match(/(\d{2}\.\d{2}\.\d{4})/);
                const timeMatch = text.match(/(\d{2}:\d{2})/);
                if (dateMatch) currentDate = dateMatch[1];
                if (timeMatch) currentTime = timeMatch[1];
            }
        }
        
        if (row.includes('Absetzung') || row.includes('Abgesagt')) continue;
        
        let matchedKeywords = [];
        for (const keyword of teamKeywords2016) {
            if (row.includes(keyword)) {
                matchedKeywords.push(keyword);
            }
        }
        
        if (matchedKeywords.length >= 2 && currentDate && currentTime) {
            const linkMatch = row.match(/href="([^"]+\/spiel\/[^"]+)"/);
            
            if (linkMatch) {
                console.log('Match found!', matchedKeywords, currentDate, currentTime, linkMatch[1]);
            }
        }
    }
}
test();
