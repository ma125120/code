1. comment是一个基于Express+MongoDB+AngularJS的图片评论应用，评论可嵌套。
2. fixed是comment的升级版，增加了用户登录功能。
3. copy_jq是一个自己制作的模仿jQuery的js库。
4. my-project 这是一个基于vue-cli+webpack+vue-router+vuex的仿京东的简易电商网站。

```javascript
npm config set phantomjs_cdnurl=https://npm.taobao.org/dist/phantomjs
npm config set chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver 
npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass

yum install perl-version perl-Data-Dumper perl-devel

flutter doctor --android-licenses 

// 改变页面的背景和字体颜色，暗色背景适合阴天阅读
var toArray = function(obj) {
  return [].slice.call(obj);
}
var els = toArray(document.querySelectorAll("div,p,section,span,a,ul,li,ol,aside,dl,dd,dt,pre"));
els.map(el=>{
  el.style.background = "#1c1f2b";
  el.style.color = "#bdcadb";
})
var pre = toArray(document.querySelectorAll("pre"));
pre.map(el=>{
  el.style.background = "#414556";
})
var span = toArray(document.querySelectorAll("code span"));
span.map(el=>{
  el.setAttribute("style","");
})
```

```
//计算浮点数
function leftPad(str, len) {
  if ( ('' + str).length < len ) {
    return ('0'.repeat(len - ('' + str).length) + str);
  } else {
    return str;
  }
}
function rightPad(str, len) {
  if ( ('' + str).length < len ) {
    return ( str + '0'.repeat(len - ('' + str).length) );
  } else {
    return str;
  }
}
var exec = function(num1, num2) {
  var str1 = ('' + num1).split("."),
      str2 = ('' + num2).split("."),
      big1 = str1[0],
      sm1 =  str1[1],
      big2 = leftPad(str2[0], big1.length),
      sm2 =  rightPad(str2[1], sm1.length),
      arr1 = [],
      arr2 = [],
      prev = 0;
  for(let i = sm1.length - 1; i >= 0; i--) {
    var _num = +sm1[i] + (+sm2[i]) + prev;
    if(_num > 10) {
      arr2.push(_num % 10);
      prev = _num / 10;
    } else {
      arr2.push(_num);
    }
  }

  for(let j = big1.length - 1; j >= 0; j--) {
    var _num = +big1[j] + (+big2[j]) + prev;
    if(_num > 10) {
      arr1.push(_num % 10);
      prev = _num / 10;
    } else {
      arr1.push(_num);
    }
  }

  return `${arr1.reverse().join("")}.${arr2.reverse().join("")}`
}

console.log(exec(0.03, 0.2));
```
