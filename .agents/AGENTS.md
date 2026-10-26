# Logbuch Updates

Whenever you make a functional, user-facing, or structural change to the website, you MUST update `logbuch.html` with a new entry detailing what was changed. 
- Use the current date for the entry (e.g. `24. Juli 2026`).
- Insert the new entry at the top of the timeline (just below the "Logbuch (Changelog)" header).
- Follow the existing HTML structure of `<div class="log-entry">...</div>`.
- Do this proactively, without the user having to remind you.

# Spielplan-Chronologie (Hin- & Rückrunde)

Whenever matches in a round-robin schedule are scheduled or played such that a Rückrundenspiel is carried out or scheduled before the corresponding Hinrundenspiel, the two fixtures must be swapped so that the earlier match is placed in the Hinrunde, maintaining a clean, chronological order:
- Statically configured in `js/config.js` via `SWAPPED_PAIRS_2016` and `SWAPPED_PAIRS_2014` using `swapHinUndRueckspiel`.
- Dynamically evaluated and kept in sync via `autoSyncHinRueckrunde(schedule)` in `saison.html` whenever data is loaded from Firestore (`match_dates` & `spiele`).
- For any future season or age group, always ensure that games already played or earlier scheduled reside in the Hinrunde.

# Spieltags-Vorschau ("Nächste Spiele") Datumsfenster

In `index.html` (and any upcoming match widgets):
- Always refer to the next 2 full weeks up to and including Sunday (23:59:59.999).
- Formula: Calculate `daysToThisSunday = (currentDay === 0) ? 7 : (7 - currentDay)` and add 7 days to cover the following Sunday.
- Fallback: If no matches are found in that 2-week window, show the next upcoming scheduled matches (+7 days from the earliest upcoming game).
