# MSE 250 Study Desk — GitHub Pages

## Setup: no Python or build step

1. Unzip MSE250-GitHub.zip.
2. Create a GitHub repository (public for GitHub Free).
3. Upload the CONTENTS of MSE250-GitHub to the repository root. The repository must contain docs/index.html, not MSE250-GitHub/docs/index.html. Upload extracted files, not the ZIP.
4. In Settings → Pages, set Source to Deploy from a branch, select main and /docs, then Save.
5. When deployment finishes, open the address shown in Settings → Pages.
6. Select your exam, select the requested PDF from your computer, then Resume / Begin.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

No GitHub Actions workflow is needed. All website files are in docs/, including the vendor folder. Relative asset URLs support repository subpaths.

## Included

- docs/: complete website, all five exam datasets, source audit, offline service worker, and bundled PDF.js with license.
- tests/: state, scoring, scope, and UI integration tests.
- scripts/: optional Node localhost server.
- SOURCE_MAP_ALL_EXAMS.csv: mappings for every exam entry.
- COURSE_NOTES.md and TEST_REPORT.md: source limitations and test coverage.

## Scope and source gap

Exam 1: 300; Exam 2: 240; Exam 3: 300; Exam 4: 320; Final: 320 mapped entries. Exam 4 uses only the specified Set 3 selections.

Book 5 lacks the promised Chapters 1–20 review copies. The final's 80 review entries reference the listed items in original Books 1–4, clearly labeled unverified against Book 5. The missing Book 5 review pages are needed to verify them. Conflicting/questionable keys are flagged and excluded from mastery scoring.

## Textbooks and progress

PDFs are not bundled and should not be committed. Select your textbook locally; the app reads it in your browser without uploading it. The shipped question data contains mappings and original companion notes, not textbook question text.

Progress is separate for every exam and saved in your browser. Moving from the existing website to GitHub Pages does not automatically transfer it: export each exam's backup from the old site's Results / Sources controls and restore it on the new site. Do not commit personal progress backups. Browser cleanup or private browsing can remove saved work.

## Optional development

With Node.js installed, run these commands from this folder:

```sh
npm install
npm test
npm run validate
npm run test:ui
npm run dev
```

Open http://localhost:4173. GitHub Pages studying needs only a browser; Node is optional for development. No Python is required.
