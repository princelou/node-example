var path =require('path');



console.log(path.normalize('.//a//b// ..//c/e// ..//'));
console.log(path.join(__dirname,'a','b','c'));
console.log(path.resolve('a','b','c'));
console.log(path.relative('.','..'));
console.log(path.dirname('.'));
console.log(path.basename('./s1.txt'));
console.log(path.extname('./s1.txt'));
console.log(path.sep);
console.log(path.delimiter);
