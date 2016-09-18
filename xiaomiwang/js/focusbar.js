$(function(){
	var focusBar = {
		//焦点图下方轮播
		carouselulList:$('.home-star-goods .xm-carousel-col-5-list'),
		xmControls: $('.xm-carousel-controls'),
		controlPrev: $('.control-prev'),
		controlNext: $('.control-next'),
		index: 0,
		init:function(){
			this.addContent();
//			this.focusLunbo();
//			this.stopPlay();
//			this.controlP();
//			this.controlN();
			console.log(1);
			
		},
		//---------------------------------------------------------焦点图下方小轮播
		addContent:function(){
			var obj = {'sliderBar':  [
											{'Img':'img/slider/slider/mi5gaopei.jpg','Phone':'小米手机5 高配版','desc':'3GB内存＋64GB容量，玻璃版','Price':'2099元'},
											{'Img':'img/slider/slider/mimax.png','Phone':'小米Max 优惠200元','desc':'128GB大容量，4850mAh大电池','Price':'1799元'},
											{'Img':'img/slider/slider/hmipro.png','Phone':'红米Pro','desc':'双摄像头，十核旗舰手机','Price':'1499元'},
											{'Img':'img/slider/slider/miairbook.jpg','Phone':'小米笔记本','desc':'独立显卡、超轻薄、金属机身','Price':'3499元'},
											{'Img':'img/slider/slider/mipad.png','Phone':'小米平板2 16GB现货','desc':'轻薄全金属，海量内容','Price':'999元'},
											{'Img':'img/slider/slider/mitv3s.png','Phone':'小米电视3S 48英寸','desc':'原装液晶屏，金属机身','Price':'1999元'},
											{'Img':'img/slider/slider/mihezi3.jpg','Phone':'小米盒子3 增强版','desc':'高端 4K 网络机顶盒','Price':'399元'},
											{'Img':'img/slider/slider/miwhatch.png','Phone':'小米手环2','desc':'每天早10点开售','Price':'149元'},
											{'Img':'img/slider/slider/mitaidneg.jpg','Phone':'米家 LED 智能台灯','desc':'独立显卡、超轻薄、金属机身','Price':'169元'},
											{'Img':'img/slider/slider/miclear.jpg','Phone':'小米空气净化器2','desc':'10分钟，房间空气焕然一新','Price':'699元'}
									]
					};
			
			var jsontext=JSON.stringify(obj);
			var json = eval('('+jsontext+')').sliderBar;
			for(var i=0;i<json.length;i++){
				var img = json[i].Img;
				var phone = json[i].Phone;
				var desc = json[i].desc;
				var price = json[i].Price;
				var str = '';
				str += 		'<li class="rainbow-item-'+(i+1)+'">'
							+	'<a href="javascript:;" class="thumb">'
							+		'<img src="'+img+'"/>'
							+	'</a>'
							+	'<h3 class="title">'
							+		'<a href="">'+phone+'</a>'
							+	'</h3>'
							+	'<p class="desc">'+desc+'</p>'
							+	'<p class="price">'+price+'</p>'
							+'</li>';
				this.carouselulList.append(str);
			}
		}
	};
	focusBar.init();
	//footer部分数据
	var footer = {
		reviewList:$('.review-list'),
		init:function(){
			this.addFoter();
		},
		addFoter:function(){
			var fobj = {'footer':  [
											{
												'Img':'img/footer/1.jpg','review':'非常可爱，一拿到小宝宝还没享受，一帮大宝宝先high了一把，同事也想买，希望早点大卖',
												'author':'来自于 秘密 的评价','title':'米兔智能故事机','price':"199元"
											},
											{
												'Img':'img/footer/2.jpg','review':'小巧，便携，连接方便还有电量显示！总体很不错，可以挂在自己的包包上用！！也可以放在车里当蓝牙电',
												'author':'来自于 佰亊柒禧 的评价','title':'小米随身蓝牙音箱','price':"59元"
											},
											{
												'Img':'img/footer/3.jpg','review':'外观大气漂亮，全金属机身，爱不释手，希望推出更多版本，支持小米！！！',
												'author':'来自于 681777 的评价','title':'小米笔记本Air 12.5英寸','price':"3499元"
											},
											{
												'Img':'img/footer/4.jpg','review':'包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...',
												'author':'来自于 HZG 的评价','title':'米家压力IH电饭煲','price':"999元"
											}
											
									]
					};
			
			var jsontext=JSON.stringify(fobj);
			var json = JSON.parse(jsontext).footer;
			for(var i=0;i<json.length;i++){
				var img = json[i].Img;
				var review = json[i].review;
				var author = json[i].author;
				var title = json[i].title;
				var price = json[i].price;
				var str = '';
				str += 		'<li class="review-item review-item-'+i+'">'
						+		'<div class="figure figure-img">'
						+			'<a href="">'
						+				'<img src="'+img+'" alt="" />'
						+			'</a>'
						+		'</div>'
						+		'<p class="review">'
						+			'<a href="">'+review+'</a>'
						+		'</p>'
						+		'<p class="author">'+author+'</p>'
						+		'<div class="info">'
						+			'<h3 class="title">'
						+				'<a href="">'+title+'</a>'
						+			'</h3>'
						+			'<span class="sep">|</span>'
						+			'<p class="price">'
						+				'<span class="num">'+price+'</span>元'
						+			'</p>'
						+		'</div>'
						+	'</li>';
				this.reviewList.append(str);
			}
		}
	};
	footer.init();
	//最后一个轮播
	var lastBar = {
		arrowLeft: $('.arrow-left'),
		arrowRight: $('.arrow-right'),
		circles: $('.pager'),
		itemLists:$('.item-list'),
		lis:$('.item-list>li'),
		index:0,
		init:function(){
			console.log(this.lis);
			this.start();
			this.startleft();
			this.circleClick();
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
			},400);
			this.circles.removeClass('pager-active');
			this.circles.eq(this.index).addClass('pager-active');
		}
	};
	
})
