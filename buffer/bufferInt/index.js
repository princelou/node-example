var buffer = new Buffer([0x00,0x01,0x02,0x03]);
console.log(buffer);
buffer.writeUInt8(2,0);
buffer.writeUInt8(3,1);
buffer.writeUInt8(4,2);
buffer.writeUInt8(5,3);
console.log(buffer);
console.log(buffer.readUInt8(0));
console.log(buffer.readUInt8(1));
console.log(buffer.readUInt8(2));
console.log(buffer.readUInt8(3));
