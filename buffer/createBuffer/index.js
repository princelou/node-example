//Three ways to create buffer object.

//1: use array to initial the Buffer
var way1 = new Buffer(10);
way1.fill(3,1,4);
console.log(way1);
console.log(way1.length);

//2: use array to initial the Buffer
var array = [0,1,2,3,4,5];
var way2 = new Buffer(array);
console.log(way2);
console.log(way2.length);

//3: use str to initial the Buffer
var str = 'shwantsia';
var way3 = new Buffer(str,'utf-8');
console.log(way3);
console.log(way3.length);
console.log(str);
console.log(str.length);
	//slice method:to change the buffer datas
var slice = way3.slice(2,4);
console.log(way3.slice(2,4));
slice[0] = 1;
console.log(way3);
