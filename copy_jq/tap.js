  var d=document;
	var tap=function(el,fn) {
		if(el&&typeof el=='object') {
			var startTime,endTime,x1,x2,y1,y2;
			el.addEventListener('touchstart',function(e) {
				startTime=Date.now();
				x1=e.touches[0].pageX;
				y1=e.touches[0].pageY;
				e.stopPropagation();
				e.preventDefault();
			},false);
			el.addEventListener('touchend', function(e) {
				e.stopPropagation();
				e.preventDefault();
				endTime=Date.now();
				x2=e.changedTouches[0].pageX;
				y2=e.changedTouches[0].pageY;			
				if((endTime-startTime<150)||Math.abs(x1-x2)<6||Math.abs(y1-y2)<6) {
					fn();
				}
			});			
		}
	};
	var swipeLeft=function(el,fn) {
		if(!el||typeof el!='object') return ;
		var startTime,endTime,x,x1,x2;
		el.addEventListener('touchstart',function(e) {
			startTime=Date.now();
			x1=e.touches[0].pageX;
			e.stopPropagation();
			e.preventDefault();
		},false);
		el.addEventListener('touchend', function(e) {
			e.stopPropagation();
			e.preventDefault();
			endTime=Date.now();
			if(endTime-startTime>=30) {
				x2=e.changedTouches[0].pageX;
				if(x1-x2>30) {
					fn();
				}
			}
		},false);
	};
	var swipeRight=function(el,fn) {
		if(!el||typeof el!='object') return ;
		var startTime,endTime,x,x1,x2;
		el.addEventListener('touchstart',function(e) {
			e.stopPropagation();
			e.preventDefault();
			startTime=Date.now();
			x1=e.touches[0].pageX;
		},false);
		el.addEventListener('touchend', function(e) {
						e.stopPropagation();
			e.preventDefault();
			endTime=Date.now();
			if(endTime-startTime>=30) {
				x2=e.changedTouches[0].pageX;
				if(x2-x1>30) {
					fn();
				}
			}
		},false);
	};
	var swipeUp=function(el,fn) {
		if(!el||typeof el!='object') return ;
		var startTime,endTime,y,y1,y2;
		el.addEventListener('touchstart',function(e) {
			e.stopPropagation();
			e.preventDefault();
			startTime=Date.now();
			y1=e.touches[0].pageY;
		},false);
		el.addEventListener('touchend', function(e) {
			e.stopPropagation();
			e.preventDefault();
			endTime=Date.now();
			if(endTime-startTime>=30) {
				y2=e.changedTouches[0].pageY;
				if(y1-y2>30) {
					fn();
				}
			}
		},false);
	};
	var swipeDown=function(el,fn) {
		if(!el||typeof el!='object') return false;
		var startTime,endTime,y,y1,y2;
		el.addEventListener('touchstart',function(e) {
						e.stopPropagation();
			e.preventDefault();
			startTime=Date.now();
			y1=e.touches[0].pageY;
		},false);
		el.addEventListener('touchend', function(e) {
			e.stopPropagation();
			e.preventDefault();
			endTime=Date.now();
			if(endTime-startTime>=30) {
				y2=e.changedTouches[0].pageY;
				if(y2-y1>30) {
					fn();
				}
			}
		},false);
	};