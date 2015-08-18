var http = require('http');
var url =  require('url');
var server = http.createServer();
server.on('request',function(req,res){
	if(req.url!=='/favicon.ico'){
	var url1 = url.parse(req.url);
	console.log(url1);
	var url2 = url.format(url);
	console.log(url2);
	console.log(req.url);
	}
});
server.listen(8999,'localhost');
