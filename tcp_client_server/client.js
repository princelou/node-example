
		console.log('crrent buffersize:'+client.bufferSize);
		console.log('client has send:%d',client.bytesWritten);
	});
});
client.setKeepAlive('true');

client.on('drain',function(){
	console.log('data all has push!');
});
client.on('error',function(err){
	consoel.log('client socket has encounter a err!');
	client.destroy();
});
