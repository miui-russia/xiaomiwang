$(function(){
	var slider = {
		slideImg: $('.slide'),
		next: 0,
		now: 0,
		circleItem: $('.circle-item'),
		//轮播区域
		sliderPosi:$('.slider-posi'),
		//左侧按钮
		arrowLeft:$('.arrow-left'),
		//右侧按钮
		arrowRight:$('.arrow-right'),
		
		init: function(){
			this.autoPlay();
			this.stopAutoplay();
			this.clickRight();
			this.clickLeft();
			this.clickCircle();
			//	
		},
		//自动轮播
		autoPlay: function(){
			var that = this;
			this.timer = setInterval(function(){
				that.next++;
				that.next %= that.slideImg.length;
				that.animate();
			},4000)
		},
		//鼠标移入停止轮播
		stopAutoplay:function(){
			var that = this;
			this.sliderPosi.on('mouseenter',function(){
				//鼠标进入区域，动画停止
				clearInterval(that.timer);
			})
			this.sliderPosi.on('mouseleave',function(){
				//鼠标离开 动画继续
				that.autoPlay();
			})
		},
		//右点击按钮
		clickRight:function(){
			var that = this;
			this.arrowRight.on('click',function(){
				that.next++;
				that.next %= that.slideImg.length;
				that.animate();
			})
		},
		//左点击按钮
		clickLeft:function(){
			var that = this;
			this.arrowLeft.on('click',function(){
				that.next--;
				that.next %= that.slideImg.length;
				that.animate();
			})
		},
		//小圆圈点击时间
		clickCircle: function(){
			var that = this;
			this.circleItem.each(function(k,v){
				$(v).on('click',function(){
					//点击时当前的next 等于当前的索引k
					that.next = k;
					that.animate();
				})
			});
		},
		//处理后的动画
		animate: function(){
			var that = this;
			that.slideImg.eq(that.now).animate({
				'opacity':0
			},500)
			that.slideImg.eq(that.next).animate({
				'opacity':1
			},500);
			
			that.circleItem.eq(that.now).removeClass('active');
			that.circleItem.eq(that.next).addClass('active');
			
			that.now = that.next;
		}
	};
	slider.init();
	
});
