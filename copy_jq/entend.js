/**
 * 类式继承
 * @param  {[type]} subClass   [子类]
 * @param  {[type]} superClass [父类]
 * @return {none}            []
 */
function extend(subClass,superClass) {
	var F=function() {};
	F.prototype=superClass.prototype;
	subClass.prototype=new F();
	subClass.prototype.constructor=superClass;

	subClass.superclass=superClass.prototype;
	if(superClass.prototype.constructor==Object.prototype.constructor) {
		superClass.prototype.constructor=superClass;
	}
}
/**
 * 原型链继承
 * @param  {[type]} o [被复制的对象]
 * @return {object}   [返回继承的对象]
 */
function clone(o) {
	function F() {};
	F.prototype=o;
	return new F();
}

/**
 * 参元类mixin
 * @param  {[type]} receivingClass [description]
 * @param  {[type]} givingClass    [description]
 * @return {[type]}                [description]
 */
function augment(receivingClass,givingClass) {
	if(arguments[2]) {
		for(var i=2,len=arguments.length;i<len;i++) {
			receivingClass.prototype[arguments[i]]=givingClass.prototype[arguments[i]];
		}
	} else {
		for(methodName in givingClass.prototype) {
			if(!receivingClass.prototype[methodName]) {
				receivingClass.prototype[methodName]=givingClass.prototype[methodName];
			}
		}
	}
}

 var MyModule=(function Manager() {
 	var modules={};
 	function define(name,deps,impl) {
 		for(var i=0,len=deps.length;i<len;i++) {
 			deps[i]=modules[deps[i]];
 		}
 		modules[name]=impl.apply(impl,deps);
 	}

 	function get(name) {
 		return modules[name];
 	}

 	return {
 		define:define,
 		get:get
 	}
 })();

var u=window.u||{};

