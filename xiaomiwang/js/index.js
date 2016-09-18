$(function(){
	var overGai = {
		smContainer: $('.sm-container'),
		navItem: $('.nav-item'),
		bianliObj: $('.bianli-obj'),
		lis: $('.result-list.li'),
		oul: $('.result-list'),
		//搜索框js
		searchText: $('.search-text'),
		searchBtn : $('.search-btn'),
		listSearch: $('.list-search'),
		textAlign: $('.text-align'),
		//mid区域生成 ul
		brickList: $('.brick-list-top'),
		//购物车
		cartMenu:$('.cart-menu'),
		topbarCart:$('.topbar-cart'),
		init: function(){
			this.blockTop();
			this.addSearchTip();
			this.clickSearch();
			this.addMidContent();
			this.topbar();
			console.log(this.cartMenu,this.topbarCart);
		},
		//二级导航
		blockTop: function(){
			var that = this;
			this.navItem.each(function(k,v){
				var _this = $(this);
				$(v).on('mouseenter',':not(.serve,.servehome)',function(){
					//清除进入$(v) 时 由于短暂的离开上一个元素 导致的leave事件
					clearTimeout(that.timer);
					that.timers = setTimeout(function(){
						that.smContainer.stop().slideDown('fast');
					},30)
					that.bianliObj.removeClass('active');
					that.bianliObj.eq(k).addClass('active');
				});
				$(v).on('mouseleave',function(){
					//瞬间进入-离开-清除slideDown，不生效
					clearTimeout(that.timers);
					////设置离开 $(v) 时 由于短暂的离开上一个元素 导致的leave事件
					that.timer = setTimeout(function(){
						that.smContainer.stop().slideUp('fast');
					},500)
				});
				that.smContainer.on('mouseenter',function(){
					//进入图片区域 立即$(v)清除 liave事件
					clearTimeout(that.timer);
				});
				that.smContainer.on('mouseleave',function(){
					that.smContainer.stop().slideUp('200');
				})
				
			});
		},
		//搜索框
		addSearchTip: function(){
			var that = this;
			var obj = {'defaultWords':  [
											{'Key':'小米手机5','Rst':11},
											{'Key':'空气净化器2','Rst':1},
											{'Key':'活塞耳机','Rst':4},
											{'Key':'小米路由器','Rst':8},
											{'Key':'移动电源','Rst':21},
											{'Key':'运动相机','Rst':3},
											{'Key':'小蚁摄像机','Rst':2},
											{'Key':'小米体重秤','Rst':1},
											{'Key':'小米插线板','Rst':13},
											{'Key':'配件优惠套装','Rst':32}
										]
					};
			//console.log(obj.defaultWords[0])
			var jsontext=JSON.stringify(obj);
			var json = eval('('+jsontext+')').defaultWords;
			for(var i=0;i<json.length;i++){
				var key = json[i].Key;
				var rst = json[i].Rst;
				var str = '';
				str += '<li data-key="">'
					+'<a href="products.html">'+key+'<span class="result">约'+rst+'件</span></a>'
					+'</li>';
				that.oul.append(str);
			}
		},
		//点击搜索
		clickSearch: function(){
			var that = this;
			this.searchText.on('click',function(){
				that.listSearch.show();
				that.searchText.addClass('active');
				that.searchBtn.addClass('active');
				//输入框文案的消失
				that.textAlign.fadeOut('fast');
			});
			this.searchText.on('blur',function(){
				//输入框文案的显示
				that.textAlign.fadeIn('fast');
			});
			$(document).on('click',function(e){
				// &&  !$(e.target).is('.search-btn')
				if(!$(e.target).is('.search-text') && !$(e.target).is('.list-search')){
					that.listSearch.hide();
					that.searchText.removeClass('active');
					that.searchBtn.removeClass('active');
				}
			});
		},
		//加内容 智能硬件
		addMidContent:function(){
			var addCon = {'addContent':  [
							{'Img':'img/midimg/miwifi.jpg','Phone':'小米路由器3','desc':'四天线设计，更安全更稳定','Price':'149','flag':'免邮费'},
							{'Img':'img/midimg/bike.jpg','Phone':'电助力折叠自行车','desc':'力矩传感电助力，让城市出行轻松有趣','Price':'1799','flag':'新品'},
							{'Img':'img/midimg/vr.jpg','Phone':'小米VR眼镜玩具版','desc':'观看新体验，期待总于意料之外','Price':'49','flag':'新品'},
							{'Img':'img/midimg/litibake.jpg','Phone':'九号平衡车','desc':'年轻人的酷玩具，骑行遥控两种玩法','Price':'1999','flag':''},
							{'Img':'img/midimg/mitu.jpg','Phone':'米兔智能故事机','desc':'微信远程互动，智能语音交互','Price':'199','flag':'新品'},
							{'Img':'img/midimg/dianfanbao.jpg','Phone':'米家压力IH电饭煲','desc':'手机智能控制，随时随地预约做饭','Price':'999','flag':''},
							{'Img':'img/midimg/bookma.jpg','Phone':'小米笔记本Air 12.5英寸','desc':'全高清屏，高能量密度大电池','Price':'3499','flag':'新品'},
							{'Img':'img/midimg/jingshuiqi.jpg','Phone':'小米净水器 厨下式','desc':'RO反渗透直出纯净水，包邮包安装','Price':'1999','flag':''},
										]
					};
			
			var jsontext=JSON.stringify(addCon);
			var json = eval('('+jsontext+')').addContent;
			for(var i=0;i<json.length;i++){
				var img = json[i].Img;
				var phone = json[i].Phone;
				var desc = json[i].desc;
				var price = json[i].Price;
				var flag = json[i].flag;
				var str = '';
				str +=	'<li class="brick-item brick-item-m brick-item-m-2">'
						+	'<div class="figure figure-img">'
						+		'<a href=""><img src="'+img+'"/></a>'
						+	'</div>'
						+	'<h3 class="title">'
						+		'<a href="">'+phone+'</a>'
						+	'</h3>'
						+	'<p class="desc">'+desc+'</p>'
						+	'<p class="price"><span class="num">'+price+'元</span></p>'
						+	'<div class="flag flag-postfree flag-'+(i+1)+' ">'+flag+'</div>'
						+'</li>';
						this.brickList.append(str);
			}
		},
		topbar:function(){
			var that = this;
			this.topbarCart.hover(function(){
				that.cartMenu.stop().slideDown('fast');
			},function(){
				that.cartMenu.stop().slideUp('fast');
			})
		}
	};
	overGai.init();
	//video摩太狂
	var model = {
		mCover:$('.m-cover'),
		mContent:$('.m-content'),
		videoItem:$('.video-item img'),
		close: $('.h-title span'),
		init:function(){
			this.modelClick();
			this.closeClick();
		},
		//打开
		modelClick:function(){
			var that = this;
			this.videoItem.click(function(e){
				that.mCover.fadeIn('400');
				that.mContent.animate({
					'top':'50%'
				},500)
			})
		},
		//关闭模态
		closeClick:function(){
			var that = this;
			this.close.click(function(){
				that.mContent.animate({
					'top':'-300%'
				},400)
				that.mCover.fadeOut('400');
			})
		}
	};
	model.init();
})
