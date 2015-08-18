var file   = require('fs').createWriteStream('./message.js');
var server = require('net').createServer();
server.on('connection',function(socket){
	socket.pause();
	setTimeout(function(){
	socket.resume();
	},2000);
	socket.on('data',function(data){
		console.log(data.toString());
		console.log('已经接收数据:%d',socket.bytesRead);
	});
	console.log('connection successfully');
	socket.pipe(file);
});
server.listen(8999,'localhost');
