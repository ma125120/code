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
    var changeColor = function() {
        var toArray = function(obj) {
            return [].slice.call(obj);
        }
        var els = toArray(document.querySelectorAll("*"));
        els.map(el=>{
            let style = el.getAttribute("style");
            el.setAttribute("style", style + "; color: #bdcadb !important; background: #1c1f2b !important");
            // el.style.background = "#1c1f2b";
            // el.style.color = "#bdcadb";
        })
        var aEl = toArray(document.querySelectorAll("a"));
        aEl.map(el=>{
            el.style.textDecoration = "underline";
            let style = el.getAttribute("style");
            el.setAttribute("style", style + "color: #bdcadb !important");
        })
        var pre = toArray(document.querySelectorAll("pre, code"));
        pre.map(el=>{
            el.setAttribute("style", "background: rgb(28, 31, 43) !important;color: rgb(189, 202, 219);");
        })
        var span = toArray(document.querySelectorAll("pre span, code span"));
        span.map(el=>{
            el.setAttribute("style","color: #bdcadb");
        });
    }

    changeColor();
    setTimeout(() => {
        changeColor();
    }, 1000);
```
