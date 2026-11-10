# Changelog

## 2026-11-10 — deployed to pp.halotec.my.id

- **Patimban : Autogate**: weighbridge RFID reader night-detection issue **resolved** (fixed by reverse
  engineering the Windows reader app). Task → 100%, issue marked resolved, challenge removed.
  Project progress 91.79% → **98.93%** (only AMS, Logging System, User guide remain, all 95%).
- **Lampung depo**: removed "implement/update existing 22x system" task; "gathering requirements" → 100%;
  added **CP** task at 60%. Project progress → **80%**.

## 2026-11-03 (data, deployed 2026-11-10)

- Title slide now shows the snapshot **creation date** ("3 November 2026") instead of the runtime date
  (`new Date()`), via `presentationDate` export in the data file.
- Created weekly snapshot `presentationData03Nov.js` (frozen as of Nov 3; later fixes intentionally
  only go into `presentationDataToday.js`).
- **Kemenag SIPPRO**: added **LAMEMBA** task (0%) with issue/challenge "waiting for form and next
  meeting"; "David laptop" issue marked resolved. Aggregate 87.69% → 81.43%.
- **Patimban : Autogate**: added weighbridge RFID task/issue/challenge (0% at the time).
- New project **Lampung depo** (requirements gathering + 22x system update).
- Task data synced from the live deployment: Akreditasi ETL 40 → 10, Traffic counter 90 → 50.
- Earlier same day: gatein static weighbridge (JICT OCR) → 100%, Monitoring (Kalibaru) → 100%,
  Traffic counter → 95%, Grafana dashboard → 100%.

## 2026-11-03 — recovered unpushed UI/UX from the live deployment

The Sep 2026 deploy was built from an uncommitted working tree. All UI changes were recovered from the
deployed bundle into source, verified by rebuilding until the output was **byte-identical** to production:

- `ProjectPresentation.jsx` — simplified slide container (removed bottom spacer strip)
- `PresentationControls.jsx` — control bar redesign (arrows left, compact `n / total` pill + title center)
- `ProgressComparisonSlide.jsx` — removed scroll-triggered sticky bar; hero card redesign; KPI row →
  4-stat grid ("Total Tasks", "Completed", "Pending / In Progress", "Sprint Progressed")
- `ProjectStatusAndChallenges.jsx` — un-stickied project cards, responsive header, mobile progress bar
- `UnfinishedProjectSlide.jsx` — header redesign matching the new card language
