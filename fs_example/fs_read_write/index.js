var fs = require('fs');
var options = {
	flag:'w'
}
var data = new Buffer('shantisa');

//fs.writeFile
fs.writeFile('./write_read.txt',data,options,function(err){
	if(err)
		console.log('writeFile error!');
	else
		console.log('writeFile!');
});

//fs.writeFileSync
fs.writeFileSync('./write_read_Sync.txt',data,options);
console.log('writeFileSync!');

//fs.readFile
fs.readFile('./write_read.txt',function(err,data){
	if(err)
		console.log('readFile error');
	else
		console.log('readFile!');
	console.log(data.toString());
});

//fs.readFileSync
try{
var data = fs.readFileSync('./write_read_Sync.txt','utf8');
console.log('readFileSync!');
console.log(data.toString());
}
catch(ex){
	console.log('readFileSync error');
}

//fs.appendFile
fs.appendFile('./write_read.txt','appendFile','utf8',function(err){
	if(err)
		console.log('appendFile error');
	else
		console.log('appendFile!');
});

//fs.appendFileSync
try{
fs.appendFileSync('./write_read_Sync.txt','appendFileSync','utf8');
console.log('appendFileSync!');
}
catch(ex){
	console.log('appendFileSync error!');
}

//fs.open()
fs.open('./article.txt','r+',function(err,fd){
	if(err) console.log('open error!');
	var buf = new Buffer('shawntsia');
	fs.write(fd,buf,0,9,1,function(err,written,buffer){
		if(err) console.log('write error!'+err);
		console.log('size:'+written);
		console.log(buffer.toString());
	});
	var buf1 = new Buffer(300);
	buf1.fill(0);
	fs.read(fd,buf1,0,300,0,function(err,bytesRead,buffer_1){
		if(err) console.log('read error!'+err);
		console.log('bytesRead:'+bytesRead);
		console.log('fs.read:'+buffer_1.toString());
	});
	fs.fsync(fd);
	fs.close(fd);
});

try{
	var fd =fs.openSync('./article.txt','r+');
	var str = 'Drupal'
	var buf = new Buffer(str);
	fs.writeSync(fd,buf,0,str.length,12);
	console.log('writeSync!');

	var buf2 = new Buffer(255);
	fs.readSync(fd,buf2,0,buf2.length,0);
	console.log(buf2.toString());
	console.log('readSync!');
	fs.close(fd);
	console.log('filse sync close');
}
catch (ex){
	console.log('openSync error'+ex)
}
