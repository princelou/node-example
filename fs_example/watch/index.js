var fs = require('fs');//

fs.watch('./test.js',function(event,filename){
	console.log(event);
	console.log(filename);
});
