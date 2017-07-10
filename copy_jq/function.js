  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <meta name="screen-orientation" content="portrait"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <meta name="full-screen" content="yes">
    <meta name="x5-fullscreen" content="true">
    <link rel="shortcut icon" href="./favicon.ico">
    <title>外卖生态圈之前端</title>
  </head>

  /*
  *使用JSONP方式进行跨域请求
  *@param url 跨域请求的地址
  *@param method 跨域请求成功后的调用方法名称，必须为字符串
   */
  function JSONP(url,methodName) {
  	if(typeof methodName!=='String') throw new Error("第2个参数必须为字符串");
  	  var jsonp=document.createElement("script"),
      		head=document.querySelectorAll("head")[0]; 
      url.indexOf("?")==-1?(url+='?'):(url+='&');
      jsonp.src=url+'callback='+methodName;
      head.appendChild(jsonp);
      jsonp.onload=function(){
        head.removeChild(jsonp);
      }
  }
/*
*获取查询字符串或哈希值的内容
*@param hash 默认查询字符串，hash为true时获取哈希值
*@return Object 由查询字符窜组成的对象
*/
function getSearch(hash) {
	var a,obj={},len;
	if(!hash) {
		a=window.location.search.slice(1).split('&');
	} else {
		a=window.location.hash.slice(1).split('&');
	}	
	len=a.length;
	for(var i=0,len=a.length;i<len;i++) {
		var argu=a[i].split('=');
		obj[argu[0]]=decodeURIComponent(argu[1]);
	}
	return obj;
}
getSearch();
/*
*查询浏览器是否支持某个css属性
*@param style 需要查询的css属性，当需要查询的css属性中间有横线时，应使用小驼峰式写法
*@return Boolean 返回是否支持的布尔值
*/
function isSupportStyle(style) {
	return style in document.body.style;
}
isSupportStyle('transform');

/*
*获取区间内的随机数
*@param start为开始值 end为结束值
*@return Number 返回一个随机数
*/
function getRandom(start,end) {
	return Math.floor(Math.random()*(end-start)+start);
}
/*
*改变哈希值，主要用于局部刷新时增加后退前进功能
*@param str 需要设置的哈希值如“prop=value”，默认随机生成
*@return none
*/
function changeHash(str) {
	var wL=window.location,href=wL.href,hash=wL.hash,arr=[],
		origin="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
		len=origin.length;
	if(str) {
		if(hash=='') {
			wL.href=href+'#'+str;
		} else {
			wL.href=href+'&'+str;
		}
	}
	for(var i=0;i<3;i++) {
		var random=Math.floor(Math.random()*(len));
		arr[i]=origin[random];
	}
	if(hash=='') {
		wL.href=href+'#gene='+arr.join("");
	} else {
		wL.href=href+'&gene='+arr.join("");
	}
}
/*获取滚动条高度*/
function getTop()
{
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body)
    {
        scrollTop=document.body.scrollTop;
    } 
    return scrollTop;
}
/**选择器*/
var $=(function() {
    function toArray(el) {
      return Array.prototype.slice.call(el,0);
    }
    function $1() {
      var dom=document.querySelectorAll.apply(document,arguments[0]),
          len=dom.length,
          t=this;
      toArray(dom).forEach(function(v,i) {
        t[i]=v;
      });
      this.length=len;
      return this;
    };
    var $=function() {
      return new $1(arguments);
    }
    return $;
})();


