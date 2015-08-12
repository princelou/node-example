/*
 *Tcp server example 
 */
var net = require('net');
var server = net.createServer();
server.on('connection',function(socket){
	console.log('connection success!');
	server.getConnections(function(err,counts){
		console.log('已经连接了:'+counts);
	});
});

server.on('listening',function(){
	console.log('listening!');
	var address = server.address();
	console.log('address:%j',address);
});
server.on('error',function(e){
	if(e.code == 'EADDRINUSE'){
		console.log('端口被占用!');
	}
});
server.on('close',function(){
	console.log('Tcp连接已经关闭!');
});

server.listen(8999,'localhost');
