// Centralized Configuration for Best of Cup
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
                        { name: "1. Spieltag", matches: [ ["SV Lohausen", "SF Vorst"], ["1. FC MG", "SG Unterrath"] ] },
                        { name: "2. Spieltag", matches: [ ["SG Unterrath", "SF Vorst"], ["SV Lohausen", "1. FC MG"] ] },
                        { name: "3. Spieltag", matches: [ ["SF Vorst", "1. FC MG"], ["SG Unterrath", "SV Lohausen"] ] },
                        { name: "4. Spieltag", matches: [ ["SG Unterrath", "1. FC MG"], ["SF Vorst", "SV Lohausen"] ] },
                        { name: "5. Spieltag", matches: [ ["SF Vorst", "SG Unterrath"], ["1. FC MG", "SV Lohausen"] ] },
                        { name: "6. Spieltag", matches: [ ["1. FC MG", "SF Vorst"], ["SV Lohausen", "SG Unterrath"] ] }
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
                        "SV Lohausen": { logo: "assets/wappen-lohausen.png" },
                        "SF Vorst": { logo: "assets/wappen-vorst.png" },
                        "SG Unterrath": { logo: "assets/wappen-unterrath.png" },
                        "1. FC MG": { logo: "assets/wappen-1fcmg.png" }
                    },
                    schedule: [
                        { name: "1. Spieltag", matches: [ ["SV Lohausen", "SG Unterrath"], ["SF Vorst", "1. FC MG"] ] },
                        { name: "2. Spieltag", matches: [ ["1. FC MG", "SV Lohausen"], ["SG Unterrath", "SF Vorst"] ] },
                        { name: "3. Spieltag", matches: [ ["SF Vorst", "SV Lohausen"], ["1. FC MG", "SG Unterrath"] ] },
                        { name: "4. Spieltag", matches: [ ["SG Unterrath", "SV Lohausen"], ["1. FC MG", "SF Vorst"] ] },
                        { name: "5. Spieltag", matches: [ ["SV Lohausen", "1. FC MG"], ["SF Vorst", "SG Unterrath"] ] },
                        { name: "6. Spieltag", matches: [ ["SV Lohausen", "SF Vorst"], ["SG Unterrath", "1. FC MG"] ] }
                    ]
                }
            }
        }
    }
};

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
