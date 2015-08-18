		var file1 =fs.createReadStream('./user.pdf');
		file1.on('data',function(data){
			console.log('foo:'+data.length);
		});
		var diff = process.hrtime(time);
		console.log('time:%d',diff[0]*1e9);
	}
	process.nextTick(foo);
}
var file = fs.createReadStream('./user.pdf');
file.on('data',function(data){
	console.log('file:'+data.length);
});
anotherTask();
console.log(process.cwd());
//process.chdir('../');
