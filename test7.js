const fs = require('fs');
const html = fs.readFileSync('detail.html', 'utf8');

// Find the section that contains the location. Often it's in a td, span or div inside the match details.
// Let's just find anything with 'ort', 'platz', 'stadion', 'anlage'
const lines = html.split('\n');
for (let i = 0; i < lines.length; i++) {
    const text = lines[i].replace(/<[^>]+>/g, '').trim();
    if (text.length > 5 && (text.toLowerCase().includes('ort') || text.toLowerCase().includes('platz') || text.toLowerCase().includes('stadion') || text.toLowerCase().includes('anlage') || text.toLowerCase().includes('strasse') || text.toLowerCase().includes('str.'))) {
        console.log('Match:', text);
    }
}
