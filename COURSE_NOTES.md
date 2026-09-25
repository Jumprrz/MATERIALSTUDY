Exam 2 is the default opening view: Book 2, Chapters 6–9, Sets 1–2 (240 items); Chapter 10 is excluded.

# MSE 250 Study Desk — all exams

Open the hosted site in Chrome on a Mac or PC. No Python, Terminal, app installation or ZIP download is needed. Select an exam from the header, then select its original textbook PDF. The PDF and progress stay in your browser. The textbook is not distributed with the site.

| Exam | Scope | Study items |
|---|---|---:|
| 1 | Book 1, Chapters 1–5, Sets 1–2 | 300 |
| 2 | Book 2, Chapters 6–9, Sets 1–2; Chapter 10 excluded | 240 |
| 3 | Book 3, Chapters 11–15, Sets 1–2 | 300 |
| 4 | Book 4, Chapters 16–20, Sets 1–2 plus selected Set 3 items | 320 |
| Final | Book 5, Chapters 21–24, Sets 1–2 plus 80 original-book review references | 320 |

## Source availability

The supplied Book 5 does not include the promised Chapters 1–20 review collection. Its 80 review copies remain unverified. The app offers the explicitly numbered items from their original Books 1–4, with a visible source-gap label on every such reference. Supply the missing Book 5 review pages to verify them. This includes Chapter 10 in final review even though it is excluded from Exam 2.

The explicit final list has four questions per chapter and totals 80; it overrides the conflicting sentence saying “up to two.” All 20 Exam 4 Set 3 selections were located, including Chapter 16 numbers 61–64.

The instructor calls the bank Section 5; the supplied PDFs label the questions Section 1 and marked answers Section 2. Book 3 also mislabels the question-only chapter headings as answers. All page references are 1-based PDF pages. Lecture, inquiry, recitation and homework files were not supplied.

## Study workflow

Select an answer, then Submit Answer. Correctness and explanations are hidden until submission. Next Question advances only when you request it. Hints are recorded; skips remain unfinished. Bookmarks, previous-question review, source links, set/topic selection and a question navigator are available.

Each exam has independent saved progress and history. Shuffle All Questions mixes only unanswered items during a full attempt and preserves completed work. Restart saves the previous attempt in history. Reset requires confirmation and offers separate controls for the selected exam or all five exams. Export and restore backups from Results and Sources & scope. Moving from localhost to the hosted URL requires importing an old backup because browser storage is tied to a website address.

Final review can use several PDFs. Select Books 1–5, or use Practice loaded books only for the available subset. A missing textbook never makes its questions count as answered.

Reports preserve the first submitted answer within each attempt, separate correct-with-hint responses, show chapter/set/topic counts and recommend weak topics. Small groups with fewer than five graded answers are marked preliminary. New chapters use original concept explanations and choice-comparison guidance, linked to the course reading. They do not reproduce textbook text in the application data. Conflicting/unmarked keys and questionable statements are excluded from mastery scoring; printed-key agreement is a separate measure.

## Offline and compatibility

After an online visit, the app attempts to cache its study assets for offline reopening. The selected PDFs must also have been remembered by the browser. Browser storage policies, cleanup or private browsing can prevent retention; export backups. The offline cache is a convenience and is not a cross-device synchronization service.

Use Original layout for the authoritative PDF typesetting; Text view reflows extracted text and can flatten superscripts/subscripts. Keyboard shortcuts: 1–6 select, Enter submits outside another focused button, H hint, B bookmark, S skip, N next, Left arrow previous. Tab/Enter operate focused controls.

## Development and optional localhost use

Data lives in docs/exam-1.json through docs/exam-5.json; docs/exams.json describes scopes. docs/core.js handles attempts and scoring; docs/app.js handles the interface; docs/pdf-source.js reads selected local PDFs. SOURCE_MAP_ALL_EXAMS.csv contains all 1,480 exam entries (some source items recur across exams). docs/source-audit.json contains source gaps and issues.

Node is optional for development: npm test, npm run validate. DOM integration requires LinkeDOM: npm install --no-save linkedom, then npm run test:ui. Use npm run dev for optional localhost use; Python is not required. Bundled PDF.js is Apache-2.0 licensed in docs/vendor/PDFJS-LICENSE.txt.
