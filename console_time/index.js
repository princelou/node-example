//console_time
console.time('timer:');// This parameter must same as console.timeEnd()'s parameter.
for(var i = 0;i<10000000;i++){
}
console.timeEnd('timer:');// This parameter must same as console.time()'s parameter.
