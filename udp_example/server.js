var dgram = require('dgram');
var server= dgram.createSocket('udp4');
server.on('message',function(msg,rinfo){
	console.log('来自客户端的数据:'+msg);
});
server.on('listening',function(){
	var addr = server.address();
	console.log('服务器正在监听:'+addr);
});
server.bind(4999,'localhost');
