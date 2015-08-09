/*
*You should mkdir ./public and insert a new files named 'test.js';
*/
var fs = require('fs');
var path = './public';


fs.exists(path,function(exists){
	if(!exists){
	fs.mkdir(path,0777,function(err){
		if(err) console.log('mkdir ./public'+err);	
	});
	}else{
		console.log('./public has exists!');
	}
});

fs.readdir(path,function(err,files){
	if(err) console.log('public readdir err:'+err);
	else console.log(files);
});

fs.stat(path,function(err,stats){
	if(err) console.log(path+'stats err:'+err);
	else console.log(stats);
});

fs.lstat(path,function(err,lstats){
	if(err) console.log(path+'lstats err:'+err);
	else console.log(lstats);
});

fs.realpath(path,function(err,resoveledpath){
	if(err) console.log(path+'realpath err:'+err);
	else console.log(resoveledpath);
});

var time = new Date();
fs.utimes(path, time,time,function(err){
	if(err) console.log('utimes err:'+err);
	else console.log('utimes update success');
});

var fullmode = '0777';
var onlyread = '0655';
var testjs = path+'/test.js';
fs.chmod(testjs,onlyread,function(err){
	if(err) console.log('onlyread mode err :'+err);
	else fs.chmod(testjs,fullmode,function(err){
		if(err) console.log('fullmode mode err:'+err);
		else(console.log(onlyread+'->'+fullmode));
	});
});

var pathSync = './publicSync';
fs.exists(pathSync,function(err,exists){
	if(exists) console.log('./publicSync has exists!');
	else fs.mkdir(pathSync,function(err){
	if(err) console.log('./publicSync err:'+err);
});
});

fs.rename(testjs,pathSync+'/test.js',function(err){
	if(err) console.log('rename err:'+err);
	else console.log(testjs+'->'+pathSync);
});

fs.link('./link.txt','./link2.txt.link',function(err){
	if(err) console.log('link err:'+err);
	else console.log('link2.txt.lin create!');
});
fs.unlink('./link2.txt.link',function(err){
	if(err) console.log('unlink err:'+err);
});

fs.symlink('./link.txt','./linksym.txt','file',function(err){
	if(err) console.log('symlink err:'+err);	
});

fs.readlink('./link.txt',function(err,linkString){
	if(err) console.log('readlink err:'+err); 
	else console.log('linkString:'+linkString);
});

fs.truncate('./link.txt',100,function(err){
	if(err) console.log('truncate err:'+err);
});

fs.rmdir('./kong',function(err){
	if(err) console.log('kong err '+err);
	else console.log('kong deleted!');
});
