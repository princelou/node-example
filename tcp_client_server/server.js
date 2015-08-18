var server  = require('net').createServer();
server.on('connection',function(socket){
	console.log('server has connection!');
	socket.on('data',function(data){
		console.log('receveied data:'+data.toString('utf8'));
	});
	socket.on('error',function(err){
		consoel.log('socket has encounter a err!'+err.code);
		socket.destroy();
	});
});
server.on('close',function(err){
	if(err) console.log('server has encounter a err!');
	else console.log('server close!');
});
server.listen(8999,'localhost');
