window.$M=(function() {
  function _$(el) {
    var el=el[0];
    if(!el){
      return false;
    }
    if(isFunction(el)) {
      $M.addEvent("DOMContentLoaded",document,function(e) {
        el();
      });
    } else {
      var ele=[],len,i;
      if(!isFunction(el)) {
        if(isArray(el)) {
          len=el.length;
          for(i=0;i<len;i++) {
            this[i]=el[i];
          }
          this.length=len;
          return this;
        } else if(typeof el=="object") {
          this[0]=el;this.length=1;
          return this;
        }
        switch (el) {
          case el.match(/^\.[^\s]/g):
            ele=document.getElementsByClassName("el.slice(1)");
            for(var i=0,len=ele.length;i<len;i++) {
              this[i]=ele[i];
            }
            break;
          case el.match(/^\#[^\s]/g):
            this[0]=document.getElementById("el.slice(1)");
            break;
          case el.match(/^\w{1,}$/g):
            ele=document.getElementsByTagName(el);
            for(var i=0,len=ele.length;i<len;i++) {
              this[i]=ele[i];
            }
            break;
          default:
          ele=document.querySelectorAll(el);
          for(var i=0,len=ele.length;i<len;i++) {
            this[i]=ele[i];
          }
        }
        this.length=i?i:1;
        return this;
      }
  }
  }
  var getDisplay=function(item) {
    var dis=item.className;
    if(item.style.display=="none"&&dis=="") {
      item.cache="";return false;
    }
    if(dis&&!item.cache) {
      item.className="";
      item.cache=document.defaultView.getComputedStyle(item,null)["display"]?document.defaultView.getComputedStyle(item,null)["display"]
                  :item.currentStyle["display"];
      item.className=dis;
    }
  }
  _$.prototype={
    show:function show1() {
      var that=this;
      setTimeout(function() {
        that.each(function(item,index) {
            getDisplay(item);
            item.style.display=item.cache;
            var child=$M(item).find("*");
            child.each(function(item1,index) {
              getDisplay(item1);
              item1.style.display=item1.cache;
            });
        });
      },1000);
      return this;
    },
    hide:function() {
      var that=this;
      this.each(function(item,index) {
        getDisplay(item);
        item.style.display="none";
      });
      return this;
    },
    text:function() {
      if(arguments.length!=0) {
        var content=arguments[0];
        this.each(function(item,index) {
          item.innerText=content;
        })
      } else {
        var arr=[];
        this.each(function(item) {
          arr.push(item.innerText);
        });
        return arr.join(";");
      }
      return this;
    },
    val:function() {
      if(arguments.length!=0) {
        var content=arguments[0];
        this.each(function(item,index) {
          item.value=content;
        })
      } else {
        var arr=[];
        this.each(function(item) {
          arr.push(item.value);
        });
        return arr.join(";");
      }
      return this;
    },
    html:function() {
      if(arguments.length!=0) {
        var content=arguments[0];
        this.each(function(item,index) {
          item.innerHTML=content;
        })
      } else {
        var arr=[];
        this.each(function(item) {
          arr.push(item.innerHTML);
        });
        return arr.join(";");
      }
      return this;
    },
    data:function() {
      if(arguments.length==2) {
        var attr=arguments[0],value=arguments[1];
        this.each(function(item,index) {
          item.dataset[attr]=value;
        })
      } else {
        var arr=[],argu=arguments[0];
        this.each(function(item) {
          arr.push(item.dataset[argu]);
        });
        return arr.join(";");
      }
      return this;
    },
    attr:function() {
      if(arguments.length==2) {
        var attr=arguments[0],value=arguments[1];
        this.each(function(item,index) {
          item.setAttribute(attr,value);
        });
      } else {
        var arr=[],attr=arguments[0];
        this.each(function(item) {
          arr.push(item.getAttribute(attr));
        });
        return arr.join(";");
      }
      return this;
    },
    classInfo:function(type,_className) {
      this.each(function(item) {
        item.classList[type](_className);
      });
      return this;
    },
    hasClass:function(_className) {
      var arr=[];
      this.each(function(item) {
        arr.push(item.classList.contains(_className));
      });
      return arr.join(";");
    },
    append:function(content) {
      this.each(function(item) {
        var value=item.innerHTML;
        item.innerHTML=value+content;
      });
      return this;
    },
    prepend:function(content) {
      this.each(function(item) {
        var value=item.innerHTML;
        item.innerHTML=content+value;
      });
      return this;
    },
    remove:function() {
      this.each(function(item) {
        item.parentNode.removeChild(item);
      });
      return this;
    },
    parent:function() {
      var arr=[],par;
      this.each(function(item) {
        par=item.parentElement;
        if(arr.indexOf(par)==-1) {
          arr.push(par);
        }
      });
      return $M(arr);
    },
    parents:function(ele) {
      var arr=[],par,_ele=$M(ele);
      this.each(function(item) {
        par=item.parentElement;
        while(par) {
          if(ele) {
            if(_ele.contains(par)&&(!arr.contains(par)))
                arr.push(par);
          } else {
            if(!arr.contains(par)) {
              arr.push(par);
            }
          }
          par=par.parentElement;
        }
      });
      return $M(arr);
    },
    parentsUntil:function(ele) {
      var arr=[],_ele=$M(ele),parent;
      this.each(function(item) {
        par=item.parentElement;
        while(par) {
          if(!_ele.contains(par)) {
            if(!arr.contains(par)) {
              arr.push(par);
            }
            par=par.parentElement;
          } else {
            break;
          }
        }
      });
      return $M(arr);
    },
    children:function(ele) {
        var arr=[],nextSib,_ele=$M(ele);
        this.each(function(item) {
          nextSib=item.firstElementChild;
          while(nextSib) {
            if(!arr.contains(nextSib)) {
              if(!ele) {
                arr.push(nextSib);
              } else  if(_ele.contains(nextSib)) {
                arr.push(nextSib);
              }
            }
            nextSib=nextSib.nextElementSibling;
          }
      });
      return $M(arr);
    },
    find:function(ele) {
      if(!ele) {
        throw new Error("必须传入参数")
      }
      var arr=[],_ele=$M(ele);
      var findChild=function finds(el) {
        var len=el.childElementCount,childs=$M(el).children(),i;
        if(len>0) {
          for(i=0;i<len;i++) {
            if(_ele.contains(childs[i])&&!arr.contains(childs[i])) {
              arr.push(childs[i]);
            }
            finds(childs[i]);
          }
        }
      }
      this.each(function(item) {
        findChild(item);
      });
      return $M(arr);
    },
    siblings:function(el) {
      if(!el) {
        return this.parent().children();
      } else {
        return this.parent().children(el);
      }
    },
    next:function() {
      var arr=[],nextSib;
      this.each(function(item) {
        nextSib=item.nextElementSibling;
        if(nextSib&&!arr.contains(nextSib))
        arr.push(nextSib);
      });
      return $M(arr);
    },
    nextAll:function() {
      var arr=[],nextSib;
      this.each(function(item) {
        nextSib=item.nextElementSibling;
        while(nextSib) {
          if(!arr.contains(nextSib)) {
            arr.push(nextSib);
          }
          nextSib=nextSib.nextElementSibling;
        }
      });
      return $M(arr);
    },
    nextUntil:function(ele) {
      if(!ele) {
        throw new Error("必须传入参数")
      }
      var arr=[],nextSib,_ele=$M(ele);
      this.each(function(item) {
        nextSib=item.nextElementSibling;
        while(nextSib) {
          if(!_ele.contains(nextSib)) {
            if(!arr.contains(nextSib)) {
              arr.push(nextSib);
            }
            nextSib=nextSib.nextElementSibling;
          } else {
            break;
          }
        }
      });
      return $M(arr);
    },
    prev:function() {
      var arr=[],prevSib;
      this.each(function(item) {
        prevSib=item.previousElementSibling;
        if(prevSib&&!arr.contains(prevSib))
        arr.push(prevSib);
      });
      return $M(arr);
    },
    prevAll:function() {
      var arr=[],prevSib;
      this.each(function(item) {
        prevSib=item.previousElementSibling;
        while(prevSib) {
          if(!arr.contains(prevSib)) {
            arr.push(prevSib);
          }
          prevSib=prevSib.previousElementSibling;
        }
      });
      return $M(arr);
    },
    prevUntil:function(ele) {
      if(!ele) {
        throw new Error("必须传入参数")
      }
      var arr=[],prevSib,_ele=$M(ele);
      this.each(function(item) {
        prevSib=item.previousElementSibling;
        while(prevSib) {
          if(!_ele.contains(prevSib)) {
            if(!arr.contains(prevSib)) {
              arr.push(prevSib);
            }
            prevSib=prevSib.previousElementSibling;
          } else {
            break;
          }
        }
      });
      return $M(arr);
    },
    filter:function(ele) {
      var _ele=$M(ele),arr=Array.prototype.filter.call(this,function(item) {
        return _ele.contains(item);
      });
      return $M(arr);
    },
    not:function(ele) {
      var _ele=$M(ele),arr=Array.prototype.filter.call(this,function(item) {
        return !_ele.contains(item);
      });
      return $M(arr);
    },
    removeAttr:function(attr) {
      this.each(function(item) {
        if(item.getAttribute(attr)) {
          item.removeAttribute(attr);
        }
      });
      return this;
    }
  }
  var $M=function() {
    return new _$(arguments);
  }
  /*给DOM元素扩展方法*/
  $M.fn=function(name,methods) {
    _$.prototype[name]=methods;
  }
  $M.extend=function(deep,target,obj1,objN) {
    var _deep,_target,_otherObj,i,len;
    if(typeof arguments[0]=="object") {
      _target=arguments[0];
      _otherObj=Array.prototype.slice.call(arguments,1);
      _deep=false;
    } else {
      _target=arguments[1];
      _otherObj=Array.prototype.slice.call(arguments,2);
      _deep=deep;
    }
    var clone=function cloned(_deep,_target,_otherObj) {
      var _deep=_deep?_deep:null;
      for(var prop in _otherObj) {
        if(_otherObj.hasOwnProperty(prop)) {
          if(!_deep) {
            _target[prop]=_otherObj[prop];
          } else {
            if(typeof _otherObj[prop]=="object") {
              _target[prop]={};
              if(_otherObj[prop] instanceof Array) {
                _target[prop]=[];
              }
              cloned(true,_target[prop],_otherObj[prop]);
            } else {
              _target[prop]=_otherObj[prop];
            }
          }
        }
      }
      return _target;
    }
    for(i=0,len=_otherObj.length;i<len;i++) {
      _target=clone(_deep,_target,_otherObj[i]);
    }
    return _target;
  }
  $M.clone=function(cloneObj) {
    return $M.extend(true,{},cloneObj);
  }
  $M.createXHR=function() {
    var methods=[
      function() {return new XMLHttpRequest();},
      function() {return new ActiveXObject(Msxml2.XMLHTTP);},
      function() {return new ActiveXObject(Microsoft.XMLHTTP);}
    ];
    for(var i=0;i<3;i++) {
      try {
        methods[i]();
      } catch(e) {
        continue;
      }
      this.createXHR=methods[i];
      return methods[i];
    }
    throw new Error("没有找到XHR对象");
  }
  $M.createXHR();
  $M.browser={
    isIE:function() {
      var agent=window.navigator.userAgent;
      var isOpera = userAgent.indexOf("Opera") > -1;
         if (isOpera) {
             return "Opera"
         }; //判断是否Opera浏览器
         if (userAgent.indexOf("Firefox") > -1) {
             return "FF";
         } //判断是否Firefox浏览器
         if (userAgent.indexOf("Chrome") > -1){
           return "Chrome";
        }
         if (userAgent.indexOf("Safari") > -1) {
             return "Safari";
         } //判断是否Safari浏览器
         if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
             return "IE";
         }; //判断是否IE浏览器
    }
  };
  $M.ajax=function(obj) {
    var method=obj.method.toUpperCase();
    var url=encodeURI(obj.url);
    var dataType=dataType?dataType:"text";
    var success=obj.success;
    var failed=obj.failed;
    var data=null,str="";
    if(method=="GET") {
      if(url.indexOf("?")==-1) {
              str="?";
      }
    }
  if(typeof obj.data=="object") {
      for(var prop in obj.data) {
        if(obj.data.hasOwnProperty(prop))
        str+=encodeURIComponent(prop)+"="
           +encodeURIComponent(obj.data[prop])+"&";
      }
      data=str;
      if(method=="GET") {
        url+=str;
      }
    }
    var xhr=$M.createXHR();
    xhr.onreadystatechange=function() {
      if(xhr.readyState==4) {
        if((xhr.status>=200&&xhr.status<300)||xhr.status==304) {
          if(dataType=='json') {
            success(JSON.parse(xhr.responseText));
          } else {
            success(xhr.responseText||xhr.responseXML);
          }
          xhr=null;
        } else {
          failed(xhr.status);
        }
      }
    }
    xhr.open(method,url,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(data);
  }
  $M.get=function(url,data,methods) {
    if(isFunction(data)) {
      methods=data;
      data=null;
    }
    $M.ajax({method:"GET",url:url,data:data,success:methods});
  };
  $M.post=function(url,data,methods) {
    if(isFunction(data)) {
      methods=data;
      data=null;
    }
    $M.ajax({method:"POST",url:url,data:data,success:methods});
  };
  //绑定事件
  $M.addEvent=function (type,ele,method) {
    var el=[];
    try {
      el=$M(ele);
    } catch(err) {
      el.push(ele);
    }
    var len=el.length;
      if(el[0].addEventListener) {
        for(var i=0;i<len;i++) {
          el[i].addEventListener(type,method,false);
        }
      } else if(el[0].attachEvent) {
        for(var i=0;i<len;i++) {
          el[i].attachEvent(type,method,false);
        }
      } else {
        for(var i=0;i<len;i++) {
          el[i]["on"+type]=method;
        }
      }
  }
  //事件委托
  $M.on=function(type,ele,method) {
    type=type=="blur"?"change":type;
    $M.addEvent(type,document,function(e) {
      if(e.target){
        for(var i=0,len=$M(ele).length;i<len;i++) {
          if(e.target==$M(ele)[i]) {
            method.call(e.target,e);
          }
        }
      }
    });
  }
  return $M;
})();
Object.prototype.each=function(method) {
  for(var i=0,len=this.length;i<len;i++) {
    method(this[i],i);
  }
}
window.isArray  =function(value){
    return Object.prototype.toString.call(value)=="[object Array]";
}
window.isFunction =function(value){
    return Object.prototype.toString.call(value)=="[object Function]";
}
Object.prototype.contains=function(ele) {
  var i=0,len=this.length,flag,that=this;
  for(;i<len;i++) {
    if(ele==that[i]) {
      flag=1;break;
    } else {
      flag=0;
    }
  }
  return flag;
}
