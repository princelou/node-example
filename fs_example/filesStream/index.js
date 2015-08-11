var fs = require('fs');
var file = fs.createReadStream('./message.txt');
file.on('open',function(fd){
	console.log('files open!');
});

file.on('end',function(){
	console.log('files read end!');
});

file.on('close',function(){
	console.log('files has close');
});

var out = fs.createWriteStream('./message2.txt');
file.on('data',function(data){
	console.log('files data'+data);
	out.write(data);
});
out.on('drain',function(){
	console.log('drain method has trriger');
});
out.on('finish',function(){
	console.log('out has finish!');
});
