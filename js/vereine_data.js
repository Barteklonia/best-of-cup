// Best of Cup - Vereinsdatenbank (Club Master Data)
// Enthält offizielle Vereinsdaten, Anschriften, Gründungsdaten, Vereinsfarben und Links

const CLUBS_DATA = [
    {
        id: "sf-vorst",
        displayName: "SF Vorst",
        fullName: "Sportfreunde 1945 Vorst e.V.",
        logo: "assets/wappen-vorst.png",
        founded: "1945",
        colors: "Schwarz-Weiß",
        colorCodes: ["#000000", "#ffffff"],
        ground: "Sportpark Vorst (Kunstrasen)",
        address: "Am Holzbüttger Haus 4, 41564 Kaarst",
        postAddress: "Höhenweg 13, 41564 Kaarst",
        website: "https://www.sfvorst.de",
        email: "info@sfvorst.de",
        phone: "(02131) 512960",
        association: "FVN • Kreis Grevenbroich-Neuss",
        associationUrl: "https://www.fvn.de/kreisgrevenbroich",
        seasons: ["2025_2026", "2026_2027"],
        ageGroups: ["2014", "2016"],
        aliases: ["SF Vorst", "Sportfreunde Vorst", "SF 1945 Vorst"]
    },
    {
        id: "sg-unterrath",
        displayName: "SG Unterrath",
        fullName: "Sportgemeinschaft Düsseldorf-Unterrath 1912/24 e.V.",
        logo: "assets/wappen-unterrath.png",
        founded: "1912 / 1924 (Fusion 1993)",
        colors: "Blau-Rot-Weiß",
        colorCodes: ["#1e40af", "#dc2626", "#ffffff"],
        ground: "HR-Schrott Arena / Franz-Rennefeld-Weg",
        address: "Franz-Rennefeld-Weg 13, 40472 Düsseldorf",
        website: "https://sgunterrath.de",
        email: "geschaeftsstelle@sgunterrath.de",
        phone: "(0211) 651138",
        association: "FVN • Kreis Düsseldorf",
        associationUrl: "https://www.fvn.de/kreisduesseldorf",
        seasons: ["2025_2026", "2026_2027"],
        ageGroups: ["2014"],
        aliases: ["SG Unterrath", "SGU", "SG Düsseldorf-Unterrath"]
    },
    {
        id: "dsc-99",
        displayName: "DSC 99 Düsseldorf",
        fullName: "Düsseldorfer Sport-Club 1899 e.V.",
        logo: "assets/wappen-duesseldorf-sc-99.png",
        founded: "20. September 1899",
        colors: "Schwarz-Weiß",
        colorCodes: ["#000000", "#ffffff"],
        ground: "Bezirkssportanlage Düsseltal",
        address: "Windscheidstraße 18, 40239 Düsseldorf",
        website: "https://www.dsc-1899.de",
        email: "kontakt@dsc-1899.de",
        phone: "(0211) 626786",
        association: "FVN • Kreis Düsseldorf",
        associationUrl: "https://www.fvn.de/kreisduesseldorf",
        seasons: ["2026_2027"],
        ageGroups: ["2014", "2016"],
        aliases: ["DSC 99 Düsseldorf", "DSC Düsseldorf", "DSC 99", "Düsseldorfer SC 99"]
    },
    {
        id: "sv-straelen",
        displayName: "SV Straelen",
        fullName: "Sportverein 19 Straelen e.V.",
        logo: "assets/wappen-sv_straelen.png",
        founded: "1919",
        colors: "Grün-Gelb",
        colorCodes: ["#15803d", "#eab308"],
        ground: "Stadion an der Römerstraße",
        address: "Römerstraße 49, 47638 Straelen",
        website: "https://sv19straelen.de",
        email: "info@sv19straelen.de",
        phone: "(02834) 91390",
        association: "FVN • Kreis Kleve/Geldern",
        associationUrl: "https://www.fvn.de/kreiskleve",
        seasons: ["2026_2027"],
        ageGroups: ["2014"],
        aliases: ["SV Straelen", "SV 1919 Straelen", "SV 19 Straelen"]
    },
    {
        id: "sv-wersten-04",
        displayName: "SV Wersten 04",
        fullName: "Sportverein Wersten 04 e.V.",
        logo: "assets/wappen-sv_wersten_04_duesseldorf.png",
        founded: "1904",
        colors: "Grün-Weiß",
        colorCodes: ["#16a34a", "#ffffff"],
        ground: "Sportanlage Scheideweg",
        address: "Scheideweg 26 / Dechenweg 24, 40591 Düsseldorf",
        website: "https://www.sv-wersten04.de",
        email: "info@sv-wersten04.de",
        phone: "(0211) 761104",
        association: "FVN • Kreis Düsseldorf",
        associationUrl: "https://www.fvn.de/kreisduesseldorf",
        seasons: ["2026_2027"],
        ageGroups: ["2014"],
        aliases: ["SV Wersten 04", "Wersten 04", "SV Wersten"]
    },
    {
        id: "sgs-essen",
        displayName: "SGS Essen",
        fullName: "Sportgemeinschaft Essen-Schönebeck 19/68 e.V.",
        logo: "assets/wappen-sgs_essen.png",
        founded: "1. Juni 2000 (Fusion 1919/1968)",
        colors: "Blau / Lila-Weiß",
        colorCodes: ["#2563eb", "#7c3aed", "#ffffff"],
        ground: "Sportanlage Ardelhütte",
        address: "Ardelhütte 166b, 45359 Essen",
        website: "https://www.sg-schoenebeck.de",
        email: "info@sg-schoenebeck.de",
        phone: "(0201) 674068",
        association: "FVN • Kreis Essen",
        associationUrl: "https://www.fvn.de/kreisessen",
        seasons: ["2026_2027"],
        ageGroups: ["2014"],
        aliases: ["SGS Essen", "SG Schönebeck", "SG Essen-Schönebeck"]
    },
    {
        id: "fc-doenberg",
        displayName: "FC Dönberg",
        fullName: "Sportfreunde Dönberg 1927 e.V.",
        logo: "assets/wappen-fc_doenberg.png",
        founded: "1927",
        colors: "Rot-Blau",
        colorCodes: ["#dc2626", "#2563eb"],
        ground: "Sportplatz Am Dönberg (Kunstrasen)",
        address: "Am Dönberg 48, 42111 Wuppertal",
        website: "http://www.sfdoenberg.de",
        email: "info@sfdoenberg.de",
        phone: "(0202) 773133",
        association: "FVN • Kreis Wuppertal-Niederberg",
        associationUrl: "https://www.fvn.de/kreiswuppertal",
        seasons: ["2026_2027"],
        ageGroups: ["2016"],
        aliases: ["FC Dönberg", "SF Dönberg", "Sportfreunde Dönberg"]
    },
    {
        id: "sf-baumberg",
        displayName: "SF Baumberg",
        fullName: "Sportfreunde Baumberg 1962 e.V.",
        logo: "assets/wappen-sf_baumberg.png",
        founded: "16. April 1962",
        colors: "Blau-Weiß",
        colorCodes: ["#1d4ed8", "#ffffff"],
        ground: "MEGA-Stadion am Kielsgraben",
        address: "Sandstraße 77a, 40789 Monheim am Rhein",
        website: "https://www.sfbaumberg.de",
        email: "geschaeftsstelle@sfbaumberg.de",
        phone: "(02173) 63868",
        association: "FVN • Kreis Solingen",
        associationUrl: "https://www.fvn.de/kreissolingen",
        seasons: ["2026_2027"],
        ageGroups: ["2016"],
        aliases: ["SF Baumberg", "Sportfreunde Baumberg", "Baumberg"]
    },
    {
        id: "etb-essen",
        displayName: "ETB Essen",
        fullName: "Essener Turner-Bund Schwarz-Weiß e.V.",
        logo: "assets/wappen-etb_sw_essen.svg",
        founded: "1. Januar 1900",
        colors: "Schwarz-Weiß",
        colorCodes: ["#000000", "#ffffff"],
        ground: "Uhlenkrugstadion",
        address: "Am Uhlenkrug 40, 45133 Essen",
        website: "https://www.sw-essen.de",
        email: "jugend@sw-essen.de",
        phone: "(0201) 441444",
        association: "FVN • Kreis Essen",
        associationUrl: "https://www.fvn.de/kreisessen",
        seasons: ["2026_2027"],
        ageGroups: ["2016"],
        aliases: ["ETB Essen", "ETB Schwarz-Weiß Essen", "ETB SW Essen", "Schwarz-Weiß Essen"]
    },
    {
        id: "sc-velbert",
        displayName: "SC Velbert",
        fullName: "Sportclub Velbert 2003 e.V.",
        logo: "assets/wappen-sc_velbert.jpg",
        founded: "2003",
        colors: "Schwarz-Rot-Blau",
        colorCodes: ["#000000", "#dc2626", "#2563eb"],
        ground: "BLF-Arena",
        address: "Von-Böttinger-Straße 2, 42549 Velbert",
        website: "https://www.scvelbert.de",
        email: "vorstand@scvelbert.de",
        phone: "(02051) 64633",
        association: "FVN • Kreis Wuppertal-Niederberg",
        associationUrl: "https://www.fvn.de/kreiswuppertal",
        seasons: ["2026_2027"],
        ageGroups: ["2016"],
        aliases: ["SC Velbert", "Sportclub Velbert"]
    },
    {
        id: "tsv-meerbusch",
        displayName: "TSV Meerbusch",
        fullName: "Turn- und Sportverein Meerbusch e.V.",
        logo: "assets/wappen-tsv_meerbusch.png",
        founded: "1. Juli 2015 (Fusion)",
        colors: "Blau-Gelb",
        colorCodes: ["#1d4ed8", "#facc15"],
        ground: "Theodor-Mostertz-Sportanlage",
        address: "Bösinghovener Straße 55, 40668 Meerbusch",
        website: "https://www.tsv-meerbusch.de",
        email: "info@tsv-meerbusch.de",
        phone: "(02159) 819964",
        association: "FVN • Kreis Kempen-Krefeld",
        associationUrl: "https://www.fvn.de/kreiskempenkrefeld",
        seasons: ["2026_2027"],
        ageGroups: ["2016"],
        aliases: ["TSV Meerbusch", "Meerbusch"]
    },
    {
        id: "vfb-hilden",
        displayName: "VfB Hilden",
        fullName: "VfB 03 Hilden e.V.",
        logo: "assets/wappen-vfb_hilden.png",
        founded: "1. Januar 1903",
        colors: "Schwarz-Weiß",
        colorCodes: ["#000000", "#ffffff"],
        ground: "Sportplatz an der Hoffeldstraße / Am Bandsbusch",
        address: "Hoffeldstraße 106, 40721 Hilden",
        website: "https://www.vfb-hilden.de",
        email: "geschaeftsstelle@vfb-hilden.de",
        phone: "(02103) 44754",
        association: "FVN • Kreis Solingen",
        associationUrl: "https://www.fvn.de/kreissolingen",
        seasons: ["2026_2027"],
        ageGroups: ["2016"],
        aliases: ["VfB Hilden", "VfB 03 Hilden"]
    },
    {
        id: "gsg-duisburg",
        displayName: "GSG Duisburg",
        fullName: "Großenbaumer Sportgemeinschaft Duisburg 1919/28 e.V.",
        logo: "assets/wappen-gsg_duisburg.png",
        founded: "1919 / 1928 (Fusion 1971)",
        colors: "Lila-Weiß",
        colorCodes: ["#7c3aed", "#ffffff"],
        ground: "Bezirkssportanlage Großenbaumer Allee",
        address: "Großenbaumer Allee 201, 47249 Duisburg",
        website: "https://www.gsg-duisburg.com",
        email: "jugend@gsg-duisburg.com",
        phone: "(0203) 761188",
        association: "FVN • Kreis Duisburg-Mülheim-Dinslaken",
        associationUrl: "https://www.fvn.de/kreisduisburg",
        seasons: ["2026_2027"],
        ageGroups: ["2016"],
        aliases: ["GSG Duisburg", "Großenbaumer SG Duisburg", "GSG"]
    },
    {
        id: "sv-lohausen",
        displayName: "SV Lohausen",
        fullName: "Lohausener Sport-Verein 1920 e.V.",
        logo: "assets/wappen-lohausen.png",
        founded: "1920",
        colors: "Grün-Weiß",
        colorCodes: ["#16a34a", "#ffffff"],
        ground: "Sportanlage Neusser Weg",
        address: "Neusser Weg 94, 40474 Düsseldorf-Lohausen",
        website: "https://www.svlohausen.de",
        email: "info@svlohausen.de",
        phone: "(0211) 450900",
        association: "FVN • Kreis Düsseldorf",
        associationUrl: "https://www.fvn.de/kreisduesseldorf",
        seasons: ["2025_2026"],
        ageGroups: ["2014"],
        aliases: ["SV Lohausen", "Lohausen", "Lohausener SV"]
    },
    {
        id: "1-fc-mg",
        displayName: "1. FC MG",
        fullName: "1. FC Mönchengladbach 1894 e.V.",
        logo: "assets/wappen-1fcmg.png",
        founded: "4. April 1894",
        colors: "Blau-Gelb",
        colorCodes: ["#1e40af", "#facc15"],
        ground: "Ernst-Reuter-Sportanlage",
        address: "Luisenstraße 35, 41061 Mönchengladbach",
        website: "https://www.1fcmg.de",
        email: "geschaeftsstelle@1fcmg.de",
        phone: "(02161) 181924",
        association: "FVN • Kreis Mönchengladbach-Viersen",
        associationUrl: "https://www.fvn.de/kreismoenchengladbach",
        seasons: ["2025_2026"],
        ageGroups: ["2014"],
        aliases: ["1. FC MG", "1. FC Mönchengladbach", "1.FCMG"]
    }
];

// Helper: Suche Verein nach Teamnamen, ID oder Alias
function getClubByQuery(query) {
    if (!query) return CLUBS_DATA[0];
    const q = String(query).trim().toLowerCase();
    
    // 1. Direkte ID
    const byId = CLUBS_DATA.find(c => c.id.toLowerCase() === q);
    if (byId) return byId;

    // 2. Display Name
    const byName = CLUBS_DATA.find(c => c.displayName.toLowerCase() === q);
    if (byName) return byName;

    // 3. Full Name
    const byFullName = CLUBS_DATA.find(c => c.fullName.toLowerCase() === q);
    if (byFullName) return byFullName;

    // 4. Aliases
    const byAlias = CLUBS_DATA.find(c => c.aliases.some(a => a.toLowerCase() === q));
    if (byAlias) return byAlias;

    // 5. Teilstring-Match
    const bySub = CLUBS_DATA.find(c => c.displayName.toLowerCase().includes(q) || q.includes(c.displayName.toLowerCase()));
    if (bySub) return bySub;

    // Fallback erster Verein
    return CLUBS_DATA[0];
}
