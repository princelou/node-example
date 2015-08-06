var foo = require('./foo.js');
var cs = require('./class.js');
//exports.foo
console.log('**foo**');
foo.show();
console.log('**foo**');

//module.exports.class

var na = new cs('shawntsia');
console.log(na.getName());

/*
*module
**/
console.log('module.id:'+module.id);
console.log('module.filename:'+module.filename);
console.log('module.loaded:'+module.loaded);
console.log('module.parent:'+module.parent);
console.log('module.children:'+module.children);




