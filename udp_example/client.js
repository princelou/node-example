var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var buf = new Buffer('shawntsia');
client.send(buf,0,buf.length,4999,'localhost',function(err,bytes){
	console.log('已经发送的字节数:'+bytes);
});
