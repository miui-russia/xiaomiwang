$(function(){
	function LastBar(obj){
		this.arrowLeft = obj.find('.arrow-left');
		this.arrowRight = obj.find('.arrow-right');
		this.circles = obj.find('.pager');
		this.itemLists = obj.find('.item-list');
		this.lis = obj.find('.item-list>li');
		this.arrow = obj.find('.arrow');
		this.contentItem = obj;
		this.index = 0;
	};
	LastBar.prototype ={
		constructor: LastBar.prototype.constructor,
		__proto__: LastBar.prototype.__proto__,
		init:function(){
			console.log(this.contentItem);
			this.start();
			this.startleft();
			this.circleClick();
			this.hoverarrow();
		},
		hoverarrow:function(){
			var that = this;
			this.contentItem.hover(function(){
				that.arrow.animate({
					'opacity':1
				})
			},function(){
				that.arrow.animate({
					'opacity':0
				})
			})
		},
		start:function(){
			var that = this;
			that.arrowRight.click(function(){
				that.index++;
				if(that.index > 3){
					that.index = 3
				}else{
					that.anima();
				}
			})
		},
		startleft:function(){
			var that = this;
			that.arrowLeft.click(function(){
				that.index--;
				if(that.index < 0 ){
					that.index = 0
				}else{
					that.anima();
				}
			})
		},
		circleClick:function(){
			var that = this;
			 this.circles.each(function(k,v){
			 	$(v).click(function(){
			 		that.index = k;
			 		that.anima();
			 	})
			 })
		},
		anima:function(){
			this.itemLists.animate({
				'margin-left':-this.index*296
			},13);
			this.circles.removeClass('pager-active');
			this.circles.eq(this.index).addClass('pager-active');
		}
	};
	var last1 = new LastBar($('#content-item-1'));
	last1.init();
	var last2 = new LastBar($('#content-item-2'));
	last2.init();
	var last3 = new LastBar($('#content-item-3'));
	last3.init();
	var last4 = new LastBar($('#content-item-4'));
	last4.init();
})
