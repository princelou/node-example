var fs = require('fs'); 
fs.watchFile('./test.js',function(curr,prev){
	console.log(curr);
	console.log(prev);
});

fs.unwatchFile('./test.js',function(curr,prev){
	console.log(curr);
	console.log(prev);
});

