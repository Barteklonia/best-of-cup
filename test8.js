async function test() {
    const res = await fetch('https://www.fussball.de/ajax.team.matchplan/-/mode/PAGE/team-id/011MI9UGIS000000VTVG0001VTR8C1K7');
    const html = await res.text();
    const rows = html.split('<tr');
    const keywords = ['Vorst', 'DSC 99', 'Unterrath', 'Wersten 04', 'Straelen', 'Schönebeck', 'Essen'];
    for (const row of rows) {
        if (row.includes('Wersten')) {
            const nameMatches = [...row.matchAll(/class="club-name">\s*([^<]+)\s*</g)];
            if (nameMatches.length >= 2) {
                let heimName = nameMatches[0][1].trim();
                let gastName = nameMatches[1][1].trim();
                let heimKeyword = keywords.find(k => heimName.includes(k));
                let gastKeyword = keywords.find(k => gastName.includes(k));
                console.log('Heim:', heimName, '=>', heimKeyword);
                console.log('Gast:', gastName, '=>', gastKeyword);
            }
        }
    }
}
test();
