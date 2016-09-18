$(function(){
	var changeKa = {
		//隐藏区域
		sChildren: $('.site-category-list .children'),
		//二级导航
		sItem: $('.site-category-list .category-item'),
		pre:0,
		init:function(){
			this.mouseHover();
			this.itemHover();
			
		},
		//鼠标离开时消失
		mouseHover:function(){
			var that = this;
			this.sItem.on('mouseleave',function(){
				that.sChildren.hide();
			})
		},
		//鼠标处理划过时的变化
		itemHover:function(){
			for(var i=0;i<this.sItem.length;i++){
				this.sItem[i].index = i;
				var that = this;
				this.sItem.on('mouseenter',function(){
					that.sChildren.eq(that.pre).hide();
					that.sChildren.eq(this.index).show();
					that.pre = this.index;
				})
			}
		}
	};
	changeKa.init();
})
