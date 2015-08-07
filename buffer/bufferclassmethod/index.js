//isBuffer
var str = 'shwantsia';
var buffer  = new Buffer(str);
console.log('str:'+Buffer.isBuffer(str));
console.log('buffer:'+Buffer.isBuffer(buffer));

//byteLength
console.log('butyelength:'+Buffer.byteLength(str,'utf8'));
console.log('length:'+buffer.length);

//concat
var buf1 = new Buffer('l');
var buf2 = new Buffer('o');
var buf3 = new Buffer('v');
var buf4 = new Buffer('e');
console.log('concat:'+Buffer.concat([buf1,buf2,buf3,buf4]).toString());

//isEncoding
console.log('isEncoding(utf8):'+Buffer.isEncoding('utf8'));
console.log('isEncoding(utf9):'+Buffer.isEncoding('utf9'));
