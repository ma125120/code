webpackJsonp([1],{"3rzx":function(t,e){},FQsJ:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},s,!1,function(t){n("3rzx")},null,null).exports,c=n("/ocq"),o=n("Gu7T"),r=n.n(o),u={name:"TimeCard",props:["img","text","index"],data:function(){return{desc:[],isShow:!1}},computed:{i:function(){return"ani"+this.index}},methods:{mapText:function(){var t=this;this.text.map(function(e){for(var n=e,i=function(e,i,s){setTimeout(function(){t.desc=[].concat(r()(t.desc.slice(0,-1)),[n.slice(0,e+6)])},80*s)},s=0,a=n.length,c=0;s<a;s+=6,c+=1)i(s,0,c);t.desc.push(n)})}},created:function(){var t=this;setTimeout(function(){t.mapText(),t.isShow=!0},500)}},p={render:function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"time-card"},[i("transition",{attrs:{name:e.i}},[e.isShow?i("img",{class:(t={"main-img":!0},t[e.i]=!0,t),attrs:{src:e.img,alt:""}}):e._e()]),e._v(" "),i("ul",{staticClass:"desc"},e._l(e.desc,function(t){return i("li",[e._v(e._s(t))])}))],1)},staticRenderFns:[]};var d={name:"Home",components:{TimeCard:n("VU/8")(u,p,!1,function(t){n("aWtO")},"data-v-0ef94ae2",null).exports},data:function(){return{mode:"auto",ppts:[{src:"../static/img/1.jpg",text:["履不必同，期于适足，治不必同，期于利民。我们就是要坚持走中国特色社会主义道路，坚持共产党的领导，坚持马克思列宁主义，毛泽东思想，邓小平理论，三个代表重要思想，科学发展观。"]},{src:"../static/img/2.jpg",text:["坚持新时代中国特色社会主义思想，提升道路自信，理论自信，制度自信，在中国共产党的领导下，不忘初心，牢记使命，决胜全面建设小康社会，夺取新时代中国特色社会主义伟大胜利，为实现中华民族伟大复兴的中国梦不懈奋斗"]},{src:"../static/img/3.jpg",text:["作为一名军人，我们最重要的职责使命就是为中国特色社会主义伟大实践保驾护航，我们要把听党指挥，维护核心当作最主首要和最关键的政治要求，要树牢敢打仗，敢打硬仗的血性信念，具备能打仗，能打恶战的能力素质。要沉心静气，把所有的精力和心思都集中到完成好本职工作上来，在平凡的岗位中实现不平凡的人生。"]},{src:"../static/img/4.jpg",text:["人生中，面对机会","犹豫者，优柔寡断，瞻前顾后。","观望者，冷眼旁观，踌躇不前。","懈怠者，意志不坚，放任自我。","软弱者，缺乏胆气，魄力不足。","想要做人生赢家，我们要始终做到克服犹豫，观望，懈怠，软弱，把握人生机会，做一个智者，勇者和践行者，为了实现自身梦想而不懈努力奋斗！"]}],pi:0,tid:null,ppt:null}},methods:{changePi:function(){this.pi<this.ppts.length-1?this.pi+=1:this.pi=0,console.log(this.pi)},changeMode:function(){this.mode="auto"==this.mode?"notauto":"auto"}},mounted:function(){var t=this;setInterval(function(){t.changePi()},8e4)}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello",on:{click:t.changePi,dbclick:t.changeMode}},[n("div",{staticClass:"tip"},[t._v("当前页面(第"+t._s(t.pi+1)+"页)")]),t._v(" "),n("TimeCard",{key:t.pi+"sad",attrs:{img:t.ppts[t.pi].src,text:t.ppts[t.pi].text,index:t.pi},on:{click:t.changePi}})],1)},staticRenderFns:[]};var m=n("VU/8")(d,l,!1,function(t){n("FQsJ")},"data-v-9d612a50",null).exports;i.a.use(c.a);var h=new c.a({routes:[{path:"/",name:"Home",component:m}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:h,components:{App:a},template:"<App/>"})},aWtO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ae5d6c2fcebc877c3845.js.map