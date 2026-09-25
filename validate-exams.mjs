import fs from 'node:fs';import assert from 'node:assert/strict';
const expected=[300,240,300,320,320],special={16:[61,62,63,64],17:[1,5,10,27],18:[3,5,8,12],19:[1,3,4,8],20:[1,2,14,16]};
let total=0;
for(let e=1;e<=5;e++){
 const d=JSON.parse(fs.readFileSync(`docs/exam-${e}.json`)),q=d.questions;assert.equal(q.length,expected[e-1]);assert.equal(new Set(q.map(x=>x.id)).size,q.length);assert.equal(d.sets.reduce((a,x)=>a+x.count,0),q.length);
 for(const x of q){assert.ok(x.hint&&x.explanation&&x.topic);assert.equal(x.optionReasons.length,x.optionLabels.length);assert.equal(x.regions.length,x.optionLabels.length+1);assert.ok(x.sourceFile&&x.readingPages.length);assert.ok(!('texts' in x));assert.equal(x.id,`b${x.book}-c${x.chapter}-s${x.set}-q${String(x.number).padStart(2,'0')}`);const book=d.books.find(b=>b.book===x.book);assert.ok(book&&book.sha256.length===64);assert.ok(x.bookKey===null||Number.isInteger(x.bookKey)&&x.bookKey>=0&&x.bookKey<x.optionLabels.length);for(const a of x.accepted)assert.ok(a>=0&&a<x.optionLabels.length);for(const regions of x.regions){assert.ok(regions.length);for(const r of regions){assert.equal(r.book,x.book);assert.ok(r.page>=1&&r.page<=book.pdfPages);assert.ok(r.box[0]<r.box[2]&&r.box[1]<r.box[3]);}}}
 if(e===2)assert.ok(q.every(x=>x.chapter>=6&&x.chapter<=9&&x.set<=2));
 if(e===4){for(const [c,ns]of Object.entries(special))assert.deepEqual(q.filter(x=>x.chapter===+c&&x.set===3).map(x=>x.number),ns);assert.equal(q.filter(x=>x.set===3).length,20);}
 if(e===5){assert.equal(q.filter(x=>x.book===5).length,240);assert.equal(q.filter(x=>x.sourceAvailability).length,80);assert.ok(d.sourceGap);for(let c=1;c<=20;c++)assert.equal(q.filter(x=>x.chapter===c&&x.set===1).length,4);assert.equal(q.filter(x=>x.chapter===10).length,4);}
 total+=q.length;console.log(`Validated ${d.label}: ${q.length} mapped items; ${q.filter(x=>!x.accepted.length).length} ungraded source issues.`);
}
assert.equal(total,1480);console.log('PASS: 1,480 exam entries, stable IDs, exact Set 3 selections, 80 explicitly labeled original-book references.');
