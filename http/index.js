var http = require('http');
var server = http.createServer(function(req,res){
	if(req.url!=='/favicon.ico'){
	req.on('data',function(data){
		console.log('server recevied data:'+decodeURIComponent(data));
		console.log('get data');
	});
	req.on('end',function(){
		console.log('server received data successffully!');
	});
	}
	res.end();

}).listen(1337,'localhost',function(){
	
	console.log('server start listening..');
//	server.close();
});
server.on('close',function(){
	console.log('server has stop!');
});
server.on('error',function(err){
	if(err.code == 'EADDRINUSE'){
		console.log('prot has been used!');
	}	});
server.on('connection',function(socket){
	console.log('server has been connect!');
});
server.timeout = 4000;
server.on('timeout',function(socket){
	console.log('server has been time out!');
	server.close();
});
