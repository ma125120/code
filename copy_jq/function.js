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


<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="renderer" content="webkit">

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
function getScrollTop() {
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



var u=window.u||{};
/**
 * 实现类式继承
 * @param  {[type]} 子类   [description]
 * @param  {[type]} 父类 [description]
 * @return {[type]}            [description]
 */
u.extend=function(subClass,superClass) {
  var F=function() {};
  F.prototype=superClass.prototype;
  subClass.prototype=new F();
  subClass.prototype.constructor=superClass;

  subClass.superclass=superClass.prototype;
  if(superClass.prototype.constructor==Object.prototype.constructor) {
    superClass.prototype.constructor=superClass;
  }
};
/**
 * 自定义事件
 */
u.Event=function() {
  this.subscibers={}
};
u.Event.prototype={
    constructor:u.Event,
    on:function(type,callback) {
      if(!this.subscibers[type]) {
        this.subscibers[type]=[];
        this.subscibers[type].push(callback);
      } else {
        this.subscibers[type].push(callback);
      }
    },
    off:function(type) {
      this.subscibers[type]=[];
    },
    emit:function(type) {
      if(typeof this.subscibers[type]=='object') {
        this.subscibers[type].forEach(function(fn,i) {
          fn();
        });
      } 
    }
};
/*
 * 自定义事件的使用方法 
 * var test=new u.Event();
 * //绑定事件
 * test.on("change",function() {
 *   console.log('change事件被触发')
 * });
 * //触发事件
 * test.emit('change');
 * //取消事件绑定
 * test.off('change');
 */
/*获取滚动条高度*/
u.getScrollTop=function getScrollTop() {
    var scrollTop=0,t=this;
    if(document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
        t.getScrollTop=function() {
          return document.documentElement.scrollTop;
        }
    }
    else if(document.body)
    {
        scrollTop=document.body.scrollTop;
        t.getScrollTop=function() {
          return document.body.scrollTop;
        }
    } 
    return scrollTop;
}

/**
 * 获取CSS样式
 * @param  {[type]} el   [description]
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
u.getCss=function(el,attr) {
  var fn=[
    function(el,attr) {
      var el=document.querySelectorAll(el)[0];
      return document.defaultView.getComputedStyle(el,null)[attr];
    },
    function(el,attr) {
      var el=document.querySelectorAll(el)[0];
      return el.currentStyle[attr];
    }
  ],i,len,t=this,v;
  for(i=0,len=fn.length;i<len;i++) {
    try {
      fn[i](el,attr);
    } catch(e) {
      continue;
    }  
    t.getCss=fn[i];
    return fn[i](el,attr);
    }
}
/**
 * 关于事件的兼容性处理
 * @type {Object}
 */
u.e={
  getEvent:function(e) {
    return e||window.event;
  },
  getTarget:function(e) {
    return e.target||e.secElement;
  },
  stopPropagation:function(e) {
    if(e.stopPropagation) {
      e.stopPropagation();
    } else {
      e.cancelBuddle=true;
    }
  },
  preventDefault:function(e) {
    if(e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue=false;
    }
  },
  stopEvent:function(e) {
    this.stopPropagation(e);
    this.preventDefault(e);
  }
}

/**
 * 模板字符串
 * @param  {[type]} html [description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
var tmpl=function(html,data) {
  var re=/<%([^%>]+)?%>/g,
      reExp=/(^()?(if|for|else|switch|case|break|{|}))(.*)?/g,
      code='var r=[];\n',
      cursor=0,
      m;
  var add=function(line,js) {
    js?(code+=line.match(reExp)?line+'\n':'r.push('+line+');\n')
      :(code+=(line!='')?'r.push("'+line.replace(/"/g,'\\"')+'");\n':'');
      return add;
  }
  while(m=re.exec(html)) {
    add(html.slice(cursor,m.index))(m[1],true);
    cursor=m.index+m[0].length;
  }
  add(html.substr(cursor,html.length-cursor));
  code+='return r.join("");';
  return new Function(code.replace(/[\r\t\n]/g,'')).apply(data);
}

var t="<p><%this.msg%></p>";
console.log(tmpl(t,{msg:'信息'}));