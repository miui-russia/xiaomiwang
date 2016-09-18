$(function(){
	var tabChange = {
		ercodeImg: $('.ercode-img'),
		wraper: $('.wraper'),
		close: $('.close'),
		container: $('.container'),
		init: function(){
			this.tabClick();
		},
		tabClick: function(){
			var that = this;
			this.ercodeImg.on('click',function(){
				that.wraper.hide();
				that.container.show();
			})
			this.close.on('click',function(){
				that.wraper.show();
				that.container.hide();
			})
		}
	};
	tabChange.init();
})
