1. comment是一个基于Express+MongoDB+AngularJS的图片评论应用，评论可嵌套。
2. fixed是comment的升级版，增加了用户登录功能。
3. copy_jq是一个自己制作的模仿jQuery的js库。
4. my-project 这是一个基于vue-cli+webpack+vue-router+vuex的仿京东的简易电商网站。

```javascript
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

