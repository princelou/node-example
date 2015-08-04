//setTimeout function

function fn(str){
 console.log(str);
}

var timer = setTimeout(fn,2000,'s1');//fn is callback function,2000 is the time, 's1' is the fn's parametes


/*
*unref cancle the callback function()
*/

//timer.unref();

/*
*ref recovery the callback function()
*/

//timer.ref();

/*
*clear the Timeout
*/

//clearTimeout(timer);
