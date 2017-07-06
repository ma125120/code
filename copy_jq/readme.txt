/*模仿jQuery的一个js库
IE9以上的浏览器
*/
一、安装
在html中引入util.js即可
二、主要实现的功能
1.选择器
$M(selector)
2.链式调用
3.HTML的操作方法，主要有：
(1)显示与隐藏：show,hide,
(2)文本的获取及设置：text,val,html
(3)元素的data属性的获取及设置：data
(4)元素的属性的获取及设置：attr,removeAttr,css
(5)在元素的结尾或开头插入内容:append,prepend
(6)类的相关操作方法： 增加某个类 $M(selector).classInfo("add",className)
                    移除某个类 $M(selector).classInfo("remove",className)
                    切换某个类 $M(selector).classInfo("toggle",className)
                    包含某个类 $M(selector).hasClass(className)
(7)移除该元素：remove
(8)DOM操作：parent,parents,parentUntil,children,find,siblings,
            next,nextAll,nextUntil,prev,prevAll,prevUntil,
            filter,not.
4.$M本身的方法
(1)对象及数组的复制及扩展
  ① $M.extend([deep],targetObj,otherObj)
      deep为1时进行深度拷贝,为0则进行浅拷贝，可选参数;
      targetObj为目标对象,
      otherObj为需要复制的对象。
    该函数执行后，targetObj对象含有所有对象的属性。
  ② $M.clone(cloneObj)
    该函数返回对cloneObj对象进行深度拷贝后的对象。
(2)绑定事件 $M.addEvent(type,element,method)
(3)事件委托 $M.on(type,element,method)
(4)ajax通信方法 $M.ajax(obj)
                参数obj为对象，参数分别为:method,url,data,dataType,
                success,failed。可以参考jq。
  $M.get(url,[data],success)或者$M.post(url,[data],success)也可以使用.

  缺点：data必须为对象，不能为数组。
