var _name='';
var cs = function(name){
	_name = name;	
}

cs.prototype.setName=function(name){
	_name = name;
}

cs.prototype.getName=function(){
	return _name;
}

module.exports = cs;
