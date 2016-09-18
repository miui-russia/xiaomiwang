$(function(){
	//产品详情页
	var detial = {
		userName: $('.user'),
		userMenu: $('.user-menu'),
		init: function(){
			this.slideInfo();		
		},
		//鼠标hover
		slideInfo:function(){
			var that = this;
			this.userName.hover(function(){
				that.userMenu.stop().slideDown('fast');
			},function(){
				that.userMenu.stop().slideUp('fast');
			})
		}
	};
	detial.init();
	//轮播
	var lunbo = {
		slideImg:$('.slide'),
		next:0,
		now:0,
		timer:null,
		arrowRight:$('.arrow-right'),
		arrowLeft:$('.arrow-left'),
		circleItem:$('.circle-item'),
		init:function(){
//			console.log(this.slideImg.length);
			this.arrowR();
		},
		arrowR:function(){
			var that = this;
			this.arrowRight.on('click',function(){
				that.next++;
				that.next %= that.slideImg.length;
				that.anima();
			})
		},
		anima:function(){
			this.slideImg.eq(this.now).animate({
				'opacity':0
			},300)
			this.slideImg.eq(this.next).animate({
				'opacity':1
			},300)
			this.circleItem.removeClass('c-active');
			this.circleItem.eq(this.next).addClass('c-active');
			this.now = this.next
		}
	};
	lunbo.init();
	//吸顶盒
	var xidinghe = {
		headerTop:$('.header-bar-active'),
		scrollTop:0,
		init:function(){
			this.scrollT();
		},
		scrollT:function(){
			var that = this;
			$(window).scroll(function(){
				that.scrollTop = $(document).scrollTop();
				if(that.scrollTop > 900){
					that.headerTop.css({
						top:0
					})
				}
				if(that.scrollTop <= 900){
					that.headerTop.css({
						top:-100
					})
				}
			})
		}
	};
	xidinghe.init();
	//物品选择
	var shoping = {
		stepItemLi:$('.J_step-1 .J_stepItem'),
		proDesc:$('.J_step-1 .pro-version-desc'),
		proPrice:$('.pro-price'),
		//第二步点击
		stepItemLiSec:$('.J_step-2 .J_stepItem'),
		proView:$('#J_proImg'),
		//第三步,第二步点击时显示
		choosePackage:$('#J_choosePackage'),
		//选择哪些商品
		msgBd:$('.msg-bd'),
		gname:$('.gname'),
		gcolor:$('.gcolor'),
		gprice:$('.gprice'),
		gamount:$('.gamount'),
		//判断点击次数
		flag:0,
		//第3步点击
		index:0,
		//下一步按钮
		btn:$('.btn'),
		mid: $('.mid'),
		//第三步
		packageItem:$('.J_packageItem'),
		init:function(){
			console.log(this.msgBd);
			this.clickStep1();
			this.clcikStep2();
			this.Package();
			this.PackageList();
			this.topCartClick();
		},
		//处理价格
		clickStep1: function(){
			var that = this;
			this.stepItemLi.each(function(k,v){
				$(v).click(function(){
					that.proPrice.text($(v).attr('data-title-price'));
					that.proDesc.text($(v).attr('data-desc'));
					//第一步骤次点击时，第三步的版本  价格需要更新
					that.gname.text($(v).attr('title'));
					that.gprice.text($(v).attr('data-title-price'));
					that.mid.attr('data-node-id',$(v).attr('data-node-id'));
					that.gamount.attr('data-amount',$(v).attr('data-index'));
					//
					that.stepItemLi.removeClass('active');
					//点击第一步时 更改第二步里面的价格
					that.stepItemLiSec.attr('data-title-price',$(v).attr('data-title-price'));
					//第一步点击的时候，data-volume 赋值给最后一步的 data-volume
					that.msgBd.find('.gvolume').attr('data-volume',$(v).attr('data-volume'));
					$(v).addClass('active');
					//判断临界点
					if(that.flag >=1 ){
						that.choosePackage.hide();
						that.gcolor.text('');
						that.stepItemLiSec.removeClass('active');
						that.packageItem.removeClass('active');
						that.flag = 0;
						that.btn.css({
							'cursor':'not-allowed',
							'background':'#fff',
							'color':'#b0b0b0',
							'border-color':'#b0b0b0'
						})
					}
					console.log(that.flag)
				})
			})
		},
		//处理图片
		clcikStep2: function(){
			var that = this;
			that.stepItemLiSec.each(function(k,v){
				$(v).click(function(){
					//判断被点击几次,如果再次点击步骤1 时，步骤3消失
					that.flag++;
					that.stepItemLiSec.removeClass('active');
					$(v).addClass('active');
					//图片预览
					that.proView.attr('src',$(v).attr('data-img'));
					//改变title的值
					$(v).attr('title',$(v).find('img').attr('alt'));
					//第二步骤次点击时，第三步的版本  价格需要更新  图片需要更新
					that.gcolor.text($(v).attr('title'));
					that.gprice.text($(v).attr('data-title-price'));
					that.msgBd.find('.gimg').attr('data-img',$(v).attr('data-img'));
//					console.log(that.flag);
					//判断 点击3 后再点击2发生的事
					if(that.index >=1 ){
						that.packageItem.removeClass('active');
						that.btn.css({
							'cursor':'not-allowed',
							'background':'#fff',
							'color':'#b0b0b0',
							'border-color':'#b0b0b0'
						})
						that.index = 0;
					}
					
				});
			});
		},
		//第二步骤点击的时候 第三步显示
		Package:function(){
			var that = this;
			this.stepItemLiSec.click(function(){
				that.choosePackage.show();
			})
		},
		//第三步点击
		PackageList:function(){
			var that = this;
			this.packageItem.each(function(k,v){
				$(v).click(function(){
					that.index++;
					that.packageItem.removeClass('active');
					$(v).addClass('active');
					that.btn.css({
						'cursor':'pointer',
						'background':'#ff6700',
						'color':'#fff',
						'border-color':'#ff6700'
					})
					console.log(that.index++);
				})
			})
			
		},
		//向购物车添加商品
		topCartClick:function(){
			var that = this;
			this.btn.click(function(){
				/*
				数据分析：
			 	1、店面 =》id / name
			 	2、商品
			 		商品编号：
			 		商品名称：data-gname
			 		商品图片：data-img
			 		商品型号：model
			 		价格:gprice
			 		颜色:gcolor
			 		容量：volume
			 		*/
				var info = {
					dgid: $('.pro-name').attr('data-gid'),
					dname: $('.pro-name').attr('data-gname'),
					dimg: $('.gimg').attr('data-img'),
					dmodel: $('.gname').html(),
					gmid: $('.mid').attr('data-node-id'),
					gvolume: $('.gvolume').attr('data-volume'),
					gprice: parseInt($('.gprice').html()),
					gcolor: $('.gcolor').html(),
					gamount:$('.gamount').attr('data-amount')
				}
//				console.log(info.gmid, info.dimg, info.dmodel,info.gvolume,info.gprice,info.gcolor);
				/*
					1、读取所有商品的cookie 
					2、判断是否已经存在当前商店的当前商品
						存在： 只需改变商品数量(小米网数量处理在购物车页面)
						不存在： 添加商品（店不存在，先加店）
				*/
				
				//购物车商品cookie名：xiaomi-cart
				//xiaomi-cart的内容
				var userCart = $.cookie('xiaomi-cart');
				userCart = userCart || '{}';
				userCart = JSON.parse(userCart);
//				console.log(userCart);
				//判断当前商品在购物车中是否已存在
				//1、购物车中没有当前店铺
				//2、购物车中没有当前商品
				//3、购物车已存在当前商品
				
				if(!userCart[info.dgid]){
					userCart[info.dgid] = {
						dgid: info.dgid,
						dname: info.dname,
						goods: {}
					}
				}
				if(!userCart[info.dgid].goods[info.gmid]){
					userCart[info.dgid].goods[info.gmid]= {
						gmid:info.gmid,
						dimg: info.dimg,
						dmodel: info.dmodel,
						gvolume: info.gvolume,
						gprice: info.gprice,
						gcolor: info.gcolor,
						gamount:info.gamount
					}
				}
				$.cookie('xiaomi-cart',JSON.stringify(userCart),{expires: 365,path:'/xiaomiwang'});
				console.log($.cookie('xiaomi-cart'));
			});
		}
	};
	shoping.init();

})
//$.removeCookie('xiaomi-cart',{path:'/xiaomiwang'});