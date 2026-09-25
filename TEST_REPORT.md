# All-exams validation

- Scope validation: 300/240/300/320/320 entries; unique IDs within each exam; source file/chapter/set/question/page mappings; all 20 special Exam 4 selections; exactly four original-book final references per Chapter 1–20.
- 1,104 new source items were matched between question and marked-answer copies. Normalized text and option counts agreed. Five new items had multiple/no bold answer marks and were excluded from grading.
- Full DOM integration: all 1,480 submissions across all five exams, explicit submit gating, hint snapshots, bookmark/skip persistence, stable shuffle after reopening, complete reports and independent retry history.
- Global reset cancellation and confirmation across all five exams.
- Exam-specific reset cancellation and confirmation; other exams’ saved states remain unchanged.
- Final setup exposes the missing review-copy warning and five PDF selectors. Missing textbooks never complete questions.
- The original 11 core state/scoring tests still pass.
- Actual browser check: exam switching, Book 4 import/rendering, selection before submission, hints and submitted feedback. Original layout inspected visually.

Limitations: DOM integration stubs PDF drawing. No claim that every item was manually clicked in a browser or tested on macOS hardware. Course keys were audited for visible issues, not certified error-free. Concept explanations for the added chapters are shared where source questions test the same concepts. Text view may flatten mathematical typography. Offline cache installation cannot be fully tested on the HTTP preview origin; hosted HTTPS/browser storage policies govern it.
