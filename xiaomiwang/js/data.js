$(function(){
	var changKa = {
		//搭配选项卡
		tabContentFirst: $('.tab-content-first'),
		tabContentSecond: $('.tab-content-second'),
		tabContentThird: $('.tab-content-third'),
		tabContentFour: $('.tab-content-four'),
		//遍历
		tabContents:$('.tab-container .tab-content'),
		tabList:$('.tab-list li'),
		init:function(){
			//
			this.addTabFir();
			this.addTabSec();
			this.addTabThird();
			this.addTabFour();
//			this.hoverChange();
//			this.addHover();
		},
		//first
		addTabFir: function(){
			var that = this;
			var addTabFirst = {'addTabF':  [
							{'Img':'img/tabchang/1/1.jpg','title':'小米路由器3','price':'四天线设计，更安全更稳定','rank':'149','review':'免邮费'},
							{'Img':'img/tabchang/1/2.jpg','title':'电助力折叠自行车','price':'力矩传感电助力，让城市出行轻松有趣','rank':'1799','review':'新品'},
							{'Img':'img/tabchang/1/3.jpg','title':'小米VR眼镜玩具版','price':'观看新体验，期待总于意料之外','rank':'49','review':'review'},
							{'Img':'img/tabchang/1/4.jpg','title':'九号平衡车','price':'年轻人的酷玩具，骑行遥控两种玩法','rank':'1999','review':''},
							{'Img':'img/tabchang/1/5.jpg','title':'米兔智能故事机','price':'微信远程互动，智能语音交互','rank':'199','review':'新品'},
							{'Img':'img/tabchang/1/6.jpg','title':'米家压力IH电饭煲','price':'手机智能控制，随时随地预约做饭','rank':'999','review':''},
							{'Img':'img/tabchang/1/7.jpg','title':'小米笔记本Air 12.5英寸','price':'全高清屏，高能量密度大电池','rank':'3499','review':'新品'},
							{'Img':'img/tabchang/1/8.jpg','title':'小米净水器 厨下式','price':'RO反渗透直出纯净水，包邮包安装','rank':'1999','review':''},
										]
					};
			
			var jsontext=JSON.stringify(addTabFirst);
			var json = eval('('+jsontext+')').addTabF;
			for(var i=0;i<json.length;i++){
				var img = json[i].Img;
				var title = json[i].title;
				var price = json[i].price;
				var rank = json[i].rank;
				var review = json[i].review;
				var str = '';
				str += 	'<li class="brick-item brick-item-m brick-item-get">'
						+	'<div class="figure figure-img">'
						+		'<a href=""><img src="'+img+'"/></a>'
						+	'</div>'
						+	'<h3 class="title">'
						+		'<a href="">'+title+'</a>'
						+	'</h3>'
						+	'<p class="price"><span class="num">'+rank+'</span></p>'
						+	'<p class="rank">'+rank+'</p>'
						+	'<div class="review-wrapper">'
						+		'<a href="">'
						+			'<span class="review">'+review+'</span>'
						+		'</a>'
						+		'<span class="author"> 来自于 糖糖果果儿 的评价 </span>'
						+	'</div>'
						+	'</li>';
				this.tabContentFirst.append(str);
			}
//			console.log(this.liHover)
		},
		//second
		addTabSec: function(){
			var that = this;
			var addTabsecond = {'addTabS':  [
							{'Img':'img/tabchang/2/1.jpg','title':'小米路由器3','price':'四天线设计，更安全更稳定','rank':'149','review':'免邮费'},
							{'Img':'img/tabchang/2/2.jpg','title':'电助力折叠自行车','price':'力矩传感电助力，让城市出行轻松有趣','rank':'1799','review':'新品'},
							{'Img':'img/tabchang/2/3.jpg','title':'小米VR眼镜玩具版','price':'观看新体验，期待总于意料之外','rank':'49','review':'review'},
							{'Img':'img/tabchang/2/4.jpg','title':'九号平衡车','price':'年轻人的酷玩具，骑行遥控两种玩法','rank':'1999','review':''},
							{'Img':'img/tabchang/2/5.jpg','title':'米兔智能故事机','price':'微信远程互动，智能语音交互','rank':'199','review':'新品'},
							{'Img':'img/tabchang/2/6.jpg','title':'米家压力IH电饭煲','price':'手机智能控制，随时随地预约做饭','rank':'999','review':''},
							{'Img':'img/tabchang/2/7.jpg','title':'小米笔记本Air 12.5英寸','price':'全高清屏，高能量密度大电池','rank':'3499','review':'新品'},
							{'Img':'img/tabchang/2/8.jpg','title':'小米净水器 厨下式','price':'RO反渗透直出纯净水，包邮包安装','rank':'1999','review':''},
										]
					};
			
			var jsontext=JSON.stringify(addTabsecond);
			var json = eval('('+jsontext+')').addTabS;
			for(var i=0;i<json.length;i++){
				var img = json[i].Img;
				var title = json[i].title;
				var price = json[i].price;
				var rank = json[i].rank;
				var review = json[i].review;
				var str = '';
				str += 	'<li class="brick-item brick-item-m brick-item-get">'
						+	'<div class="figure figure-img">'
						+		'<a href=""><img src="'+img+'"/></a>'
						+	'</div>'
						+	'<h3 class="title">'
						+		'<a href="">'+title+'</a>'
						+	'</h3>'
						+	'<p class="price"><span class="num">'+rank+'</span></p>'
						+	'<p class="rank">'+rank+'</p>'
						+	'<div class="review-wrapper">'
						+		'<a href="">'
						+			'<span class="review">'+review+'</span>'
						+		'</a>'
						+		'<span class="author"> 来自于 糖糖果果儿 的评价 </span>'
						+	'</div>'
						+	'</li>';
				this.tabContentSecond.append(str);
			}
//			console.log(this.liHover)
		},
		//third
		addTabThird: function(){
			var that = this;
			var addTabThird = {'addTabT':  [
							{'Img':'img/tabchang/3/1.jpg','title':'小米路由器3','price':'四天线设计，更安全更稳定','rank':'149','review':'免邮费'},
							{'Img':'img/tabchang/3/2.jpg','title':'电助力折叠自行车','price':'力矩传感电助力，让城市出行轻松有趣','rank':'1799','review':'新品'},
							{'Img':'img/tabchang/3/3.jpg','title':'小米VR眼镜玩具版','price':'观看新体验，期待总于意料之外','rank':'49','review':'review'},
							{'Img':'img/tabchang/3/4.jpg','title':'九号平衡车','price':'年轻人的酷玩具，骑行遥控两种玩法','rank':'1999','review':''},
							{'Img':'img/tabchang/3/5.jpg','title':'米兔智能故事机','price':'微信远程互动，智能语音交互','rank':'199','review':'新品'},
							{'Img':'img/tabchang/3/6.jpg','title':'米家压力IH电饭煲','price':'手机智能控制，随时随地预约做饭','rank':'999','review':''},
							{'Img':'img/tabchang/3/7.jpg','title':'小米笔记本Air 12.5英寸','price':'全高清屏，高能量密度大电池','rank':'3499','review':'新品'},
							{'Img':'img/tabchang/3/8.jpg','title':'小米净水器 厨下式','price':'RO反渗透直出纯净水，包邮包安装','rank':'1999','review':''},
										]
					};
			
			var jsontext=JSON.stringify(addTabThird);
			var json = eval('('+jsontext+')').addTabT;
			for(var i=0;i<json.length;i++){
				var img = json[i].Img;
				var title = json[i].title;
				var price = json[i].price;
				var rank = json[i].rank;
				var review = json[i].review;
				var str = '';
				str += 	'<li class="brick-item brick-item-m brick-item-get">'
						+	'<div class="figure figure-img">'
						+		'<a href=""><img src="'+img+'"/></a>'
						+	'</div>'
						+	'<h3 class="title">'
						+		'<a href="">'+title+'</a>'
						+	'</h3>'
						+	'<p class="price"><span class="num">'+rank+'</span></p>'
						+	'<p class="rank">'+rank+'</p>'
						+	'<div class="review-wrapper">'
						+		'<a href="">'
						+			'<span class="review">'+review+'</span>'
						+		'</a>'
						+		'<span class="author"> 来自于 糖糖果果儿 的评价 </span>'
						+	'</div>'
						+	'</li>';
				this.tabContentThird.append(str);
			}
//			console.log(this.liHover)
		},
		//Four
		addTabFour: function(){
			var that = this;
			var addTabFour = {'addTabF':  [
							{'Img':'img/tabchang/4/1.jpg','title':'小米路由器3','price':'四天线设计，更安全更稳定','rank':'149','review':'免邮费'},
							{'Img':'img/tabchang/4/2.jpg','title':'电助力折叠自行车','price':'力矩传感电助力，让城市出行轻松有趣','rank':'1799','review':'新品'},
							{'Img':'img/tabchang/4/3.jpg','title':'小米VR眼镜玩具版','price':'观看新体验，期待总于意料之外','rank':'49','review':'review'},
							{'Img':'img/tabchang/4/4.jpg','title':'九号平衡车','price':'年轻人的酷玩具，骑行遥控两种玩法','rank':'1999','review':''},
							{'Img':'img/tabchang/4/5.jpg','title':'米兔智能故事机','price':'微信远程互动，智能语音交互','rank':'199','review':'新品'},
							{'Img':'img/tabchang/4/6.jpg','title':'米家压力IH电饭煲','price':'手机智能控制，随时随地预约做饭','rank':'999','review':''},
							{'Img':'img/tabchang/4/7.jpg','title':'小米笔记本Air 12.5英寸','price':'全高清屏，高能量密度大电池','rank':'3499','review':'新品'},
							{'Img':'img/tabchang/4/8.jpg','title':'小米净水器 厨下式','price':'RO反渗透直出纯净水，包邮包安装','rank':'1999','review':''},
										]
					};
			
			var jsontext=JSON.stringify(addTabFour);
			var json = eval('('+jsontext+')').addTabF;
			for(var i=0;i<json.length;i++){
				var img = json[i].Img;
				var title = json[i].title;
				var price = json[i].price;
				var rank = json[i].rank;
				var review = json[i].review;
				var str = '';
				str += 	'<li class="brick-item brick-item-m brick-item-get">'
						+	'<div class="figure figure-img">'
						+		'<a href=""><img src="'+img+'"/></a>'
						+	'</div>'
						+	'<h3 class="title">'
						+		'<a href="">'+title+'</a>'
						+	'</h3>'
						+	'<p class="price"><span class="num">'+rank+'</span></p>'
						+	'<p class="rank">'+rank+'</p>'
						+	'<div class="review-wrapper">'
						+		'<a href="">'
						+			'<span class="review">'+review+'</span>'
						+		'</a>'
						+		'<span class="author"> 来自于 糖糖果果儿 的评价 </span>'
						+	'</div>'
						+	'</li>';
				this.tabContentFour.append(str);
			}
		}
//		//搭配选项卡
//		addHover:function(){
//			var that = this;
//			var liHover = $('.brick-item-get');
//			var reviewWrapper = $('.review-wrapper');
//			console.log(liHover);
//			liHover.hover(function(){
//				reviewWrapper.eq($(this).index()).stop().animate({
//					'height':76,
//					'opacity':1
//				},250)
//			},function(){
//				reviewWrapper.eq($(this).index()).stop().animate({
//					'height':0,
//					'opacity':0
//				},200)
//			})
//		},
//		hoverChange:function(){
//			//console.log(this.tabContents,this.tabList);
//			var that = this;
//			this.tabList.each(function(k,v){
//				$(v).hover(function(){
//					that.tabList.removeClass('tab-active');//
//					that.tabContents.removeClass('tab-content-active');//
//					$(v).addClass('tab-active');
//					that.tabContents.eq(k).addClass('tab-content-active');
//				})
//			})
//		}
	}
	changKa.init();
	
})
