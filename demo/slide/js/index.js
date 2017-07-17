$(function() {
	var u=window.u||{};
	u.Slide=function(el,li) {
		if(!el||!li) throw new Error('必须传入DOM元素');
		this.index=0;
		this.tId=null;
		this.el=$(el);
		this.li=$(li);
		this.start();
	};
	u.Slide.prototype={
		constructor:this,
		changeImg:function() {
			var t=this;
			t.el.eq(t.index).addClass('active').siblings().removeClass('active');
			t.li.eq(t.index).addClass('active').siblings().removeClass('active');
			return t;
		},
		setIndex:function(i) {
			var t=this;
			t.index=i;
			t.changeImg();
			return t;
		},
		start:function() {
			var t=this;
			t.tId=setInterval(function() {
				t.index++;
				t.index=t.index>=5?0:t.index;
				t.changeImg();
			},2000);
			return t;
		},
		pause:function() {
			var t=this;
			clearInterval(t.tId);
			return t;
		},
		proxy:function(fn) {
			var t=this;
			return function() {
				fn.call(t);
			}
		}
	};
	u.liToImg=function() {
		var t=$(this),i=t.index();
		s.setIndex(i).pause();
	};

	var s=new u.Slide('#wrap img','.slide_ul li');
	$(document).on('mouseover','.slide_ul li',u.liToImg);
	$(document).on('mouseout','.slide_ul li',s.proxy(s.start));
});