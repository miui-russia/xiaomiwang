$(function(){
	function ChangeBar(obj){
		this.changBox = obj;
		this.tabList = obj.find('.tab-list li');
		this.tabContents = obj.find('.tab-container .tab-content');
		this.tabContentFirst = obj.find('.tab-content-first');
		this.tabContentSecond = obj.find('.tab-content-second');
		this.tabContentThird= obj.find('.tab-content-third');
		this.tabContentFour = obj.find('.tab-content-four');
		//遍历
		this.tabContents = obj.find('.tab-container .tab-content');
		this.tabList = obj.find('.tab-list li');
		this.liHover = obj.find('.brick-item-get');
		this.reviewWrapper = obj.find('.review-wrapper');
	}
	ChangeBar.prototype = {
		constructor: ChangeBar.prototype.constructor,
		__proto__: ChangeBar.prototype.__proto__,
		init:function(){
			
			this.hoverChange();
			this.addHover();
		},
		//搭配选项卡
		addHover:function(){
			var that = this;
			this.liHover.each(function(k,v){
				$(v).hover(function(){
					that.reviewWrapper.eq(k).stop().animate({
						'height':76,
						'opacity':1
					},250)
				},function(){
					that.reviewWrapper.eq(k).stop().animate({
						'height':0,
						'opacity':0
					},200)
				})
			})
			
		},
		hoverChange:function(){
			//console.log(this.tabContents,this.tabList);
			var that = this;
			this.tabList.each(function(k,v){
				$(v).hover(function(){
					that.tabList.removeClass('tab-active');//
					that.tabContents.removeClass('tab-content-active');//
					$(v).addClass('tab-active');
					that.tabContents.eq(k).addClass('tab-content-active');
				})
			})
		}
	}
	var changBox = new ChangeBar($('#match'));
	changBox.init();
	var changBox2 = new ChangeBar($('#accessories'));
	changBox2.init();
	var changBox3 = new ChangeBar($('#around'));
	changBox3.init();
});

