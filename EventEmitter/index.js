var http =  require('http');
var server = http.createServer();
/*
* on method example
**/
var count = 0;
server.on('request',function(req,res){
	count++;
	console.log('*'+count+'*');
	console.log('This is on method');
});

/*
*addListener method example
**/
function add(req,res){
        console.log('This is addListener method');
}
server.addListener('request',add);

/*
* once method example
**/
server.once('request',function(req,res){
	console.log('This is once method');
});

/*
*if the request is thrid time. i will cancle the addListener 's callback event.
**/
	//server.removeListener('request',add);
	//console.log('clear addListener');
/*
*if the request is forth time.cancle all the listener
**/
	//server.removeAllListeners('request');
	//console.log('clear all request listeners');

/*
* custom event, use 'emit' to trigger the function.
*/
server.on('customEvent',function(arg1,arg2,arg3){
	console.log(arg1+arg2+arg3);
});
server.emit('customEvent','1','2','3');

/*
*listener of newListener,listener of removeListener
**/
server.on('newListener',function(){
	console.log('\n create a new listener\n');
});
server.on('removeListener',function(){
	console.log('\n remove a listener\n');
});
server.listen(3000,'127.0.0.1',function(){
	console.log('\nserver has started at 3000');
});
