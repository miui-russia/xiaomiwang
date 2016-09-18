$(function(){
	function FocusBar(obj){
		this.focus = obj;
		this.carouselulList = obj.find('.xm-carousel-col-5-list');
		this.xmControls = obj.find('.xm-carousel-controls');
		this.controlPrev = obj.find('.control-prev');
		this.controlNext  =  obj.find('.control-next');
		this.index =  0;
	}
	FocusBar.prototype = {
		constructor: FocusBar.prototype.constructor,
		__proto__: FocusBar.prototype.__proto__,
		//焦点图下方轮播
		init:function(){
//			this.addContent();
			this.focusLunbo();
			this.stopPlay();
			this.controlP();
			this.controlN();
			
		},
		//开始轮播
		focusLunbo:function(){
			var that = this;
			this.timer = setInterval(function(){
				that.index++;
				that.switchanimate();
			},6000)
		},
		//左点击
		controlP:function(){
			var that = this;
			this.controlPrev.on('click',function(){
				that.index--;
				if(that.index < 0){
					that.index = 0
				}else{
					that.switchanimate();
				}
			})
		},
		//右点击
		controlN:function(){
			var that = this;
			this.controlNext.on('click',function(){
				that.index++;
				if(that.index > 1){
					that.index = 1
				}else{
					that.switchanimate();
				}
			})
		},
		//鼠标移入停止
		stopPlay:function(){
			var that = this;
			this.xmControls.on('mouseenter',function(){
				clearInterval(that.timer);
			})
			this.xmControls.on('mouseleave',function(){
				that.focusLunbo();
			})
		},
		//焦点轮播封装动画
		switchanimate:function(){
			if(this.index > 1){
				this.index = 0;
				this.carouselulList.animate({
					'margin-left':0
				},500);
			}
			this.carouselulList.animate({
				'margin-left':-this.index*1240
			},500);
		}
	}
	var focus = new FocusBar($('#home-star-first'));
	focus.init();
	var focus2 = new FocusBar($('#recommend'));
	focus2.init();
	
})
