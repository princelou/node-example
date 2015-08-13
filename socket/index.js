var net = require('net');
var server = net.createServer();
var file = require('fs').createWriteStream('./message.txt');
server.on('connection',function(socket){
	console.log(socket);
	socket.on('end',function(){
		file.end('seeBye');
	});
});
server.listen(8999,'localhost');
