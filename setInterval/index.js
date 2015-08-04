//setInterval example && ref ,unref

function fn(str){
 console.log(str);
}
var timer = setInterval(fn,2000,'s1')//fn is callback function,2000 is Interval time. 's1' is fn function()'s parameters



/*
*unref the statement will end up the callback function
*/

//timer.unref();

/*
*ref the statement will recovery the callback function
*/

//timer.ref();

/*
*clear the Interval function
*/

//clearInterval(timer);
