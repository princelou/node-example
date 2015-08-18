var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
	if(req.url!='/favicon.ico'){
	//	res.writeHead(200,{'Content-Type':'text/plain','Access-Contro-Allow-Origin':'http://localhost'});
		res.sendDate = false;
		res.statusCode = 200;
		res.setHeader('Content-Type','Text/html');
		res.write('hello world!');
		res.end();
		if(res.headersSent) console.log('header has send');
	}
});

server.listen(8999,'localhost',function(){
	console.log('server has listening at 8999..');
});

server.on('error',function(err){
	if(err.code == 'EADDRINUSE'){
		console.log('Port has been used!');
	}
});
var options = {
	hostname:'www.baidu.com',
	port:80,
	method:'GET'
};
var req = http.request(options,function(res){
	res.setEncoding('utf8');
	res.on('data',function(chunck){
		console.log('响应内容：'+chunck);
	});	
});
req.end();
