var tempStr = 'shawntsia';


//create new buffer
var buffer = new Buffer(tempStr);
console.log(tempStr);
console.log(buffer);


//buffer.toString
var str = buffer.toString('utf8',2,3);
console.log(str);

//buffer.write only replace the buffer str.
var gstr = '@gmial.com';
buffer.write(gstr);
console.log(buffer);
console.log(buffer.toString());

//StringDecoder
var stringDecoder = require('string_decoder').StringDecoder;
var decoder = new stringDecoder('utf8');
	//orgin method
var bufferchina = new Buffer('腾讯');
console.log('\'腾讯\'buffer：');
console.log(bufferchina);
var buf1 = new Buffer([0xe8,0x85,0xbe,0xe8]);
var buf2 = new Buffer([0xae,0xaf]);
console.log('buf1:'+buf1.toString());
console.log('buf2:'+buf2.toString());
console.log(Buffer.concat([buf1,buf2]).toString());
	//decoder method
var str1  = decoder.write(buf1);
var str2  = decoder.write(buf2);
console.log(str1+str2);
