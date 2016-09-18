$(function(){
	var shopcart = {
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
	shopcart.init();
	
	
	/*
	 * 
		有哪些功能？
		1、添加
		2、减少
		3、文本框直接输入
		4、删除
		5、复选框选择
		6、店铺商品全选
		7、所有商品全选
		8、删除选中的商品
		9、计数和总价
		
		每次操作都会请求服务器（异步请求ajax）
		
		首要任务：
		读取购物车cookie，将数据拼接放到页面上
	*/
	var cartHander = {
		cart:{},
		payCart:{},
		//数量加减
		minus: $('.J_minus'),
		plus: $('.J_plus'),
		inputVal: null,
		msg:null,
		//append对象
		cartList: $('.list-body'),
		model:$('.model'),
		cover:$('.model .cover'),
		content:$('.model .content'),
		btnSure:$('.model .btn-right'),
		btnCancel:$('.model .btn-left'),
		init: function(){
			this.handData();
			this.plusClick();
			this.inputVal = $('.change-goods-num input');
			this.msg = $('.msg');
			this.minusClick();
			this.handleInput();
			this.deleteClick();
			this.shopSelect();
			this.selectAll();
		},
		handData:function(){
			this.readCart();
			var cartStr = '';
			for(var key in this.cart){
				var obj = this.cart[key];
				for(var Key2 in obj.goods){
					var goods = obj.goods[Key2];
					console.log(goods.gmid);
					cartStr += 	 '<div class="item-box">'
							+ 		'<div class="item-table J_cartGoods" data-gid="'+100010+'" data-gname="'+obj.dname+'">'
							+			'<div class="item-row clearfix">'
							+		'<div class="col col-check">'
							+				'<input type="checkbox" class="iconfont icon-checkbox"'
							+				' data-status="1"></input>'
							+		'</div>'
					cartStr +=		'<div class="col col-img" data-node-id="'+goods.gmid+'">'
							+			'<a href="javascript:;">'
					cartStr +=				'<img src="'+goods.dimg+'" style="width: 80px; height:80px;"/>'
							+			'</a>'
							+		'</div>'
					cartStr +=		'<div class="col col-name">'
							+			'<h3 class="name">'
					cartStr +=				'<a href="javascript:;" target="_blank">'+obj.dname+' '+goods.dmodel+' '+goods.gcolor+' '+goods.gvolume+'</a>';
							+			'</h3>'
					cartStr +=		'<p class="desc">适配机型:<span>'+obj.dname+'</span></p>'
							+		'</div>'
					cartStr +=		'<div class="col col-price"><span>'+goods.gprice+'</span></div>';
					cartStr +=		'<div class="col col-num">'
							+			'<div class="change-goods-num clearfix J_changeGoodsNum">'
							+				'<a href="javascript:;" class="J_minus">-</a>'
							+				'<input type="text" name="" value="'+goods.gamount+'" class="goods-num J_goodsNum"'
							+					'data-num="1" data-buylimit="50"/>'
							+				'<a href="javascript:;" class="J_plus">+</a>'
							+				'<div class="msg J_canBuyLimit">还可买 10 件以上</div>'
							+			'</div>'
							+		'</div>'
					cartStr +=		'<div class="col col-total"><span>'+goods.gprice*goods.gamount+'</span>元</div>'
					cartStr +=		'<div class="col col-action">'
							+			'<a href="javascript:;" id="2160700018_0_buy" '
							+				'data-msg="确定删除吗？" title="删除" class="del J_delGoods">x</a>'
							+		'</div>'
							+	'</div>'
							+	'</div>'
					cartStr +=	'</div>'
				};
			};
			this.cartList.append(cartStr);
			
		},
		//增加商品数量
		plusClick:function(){
			var that = this;
			$('.J_plus').click(function(){
				var max = 50;
				var val = $(this).prev().val();
				if(val >= max){
					$(this).next().html('土豪，每人只能买这么多了');
					return;
				}
				val++;
				that.optionHandle($(this),val);
				$(this).prev().val(val);
			})
		},
		//减少商品数量
		minusClick:function(){
			var that = this;
			$('.J_minus').click(function(){
				var val = $(this).next().val();
				if(val <= 1){
					$(this).siblings('.msg').html('');
					return;
				}
				val--;
				that.optionHandle($(this),val);
				$(this).next().val(val);
			})
		},
		//文本框直接输入
		handleInput:function(){
			var that = this;
			$('.goods-num').on('input propertychange',function(){
				var max = 50;
				var val = $(this).val();
				if(val >= max){
					val = max;
				}
				//数字有效性验证
				var reg = /^[1-9]\d*$/;
				if(!reg.test(val)){
					val = 1;
				}
				that.optionHandle($(this),val);
				$(this).val(val);
			})
		},
		//删除
		deleteClick:function(){
			var that = this;
			$('.del').click(function(e){
				var obj = $(this);
				model.show(function(){
					console.log(that);
					//删除前需要读取cookie
					that.readCart();
					var dgid = obj.parents('.item-box').find('.item-table').attr('data-gid');
					var gmid = obj.parents('.item-box').find('.col-img').attr('data-node-id');
					var ul = obj.parents('.item-box');
					ul.remove();
//					console.log(that.cart);
//					console.log(that.cart[dgid]);
//					console.log(that.cart[dgid].goods);
//					console.log(dgid,gmid);
					delete that.cart[dgid].goods[gmid];
					that.setCart();
				});
			})
		},
		//购物车全选
		shopSelect:function(){
			var that = this;
			$('.icon-checkbox').change(function(){
				if($(this).prop('checked')){
					
					that.addPayCart($(this));
					//测试是否选中
					var siblings = $(this).parents('.item-box').siblings();
					var siblingsSelect = siblings.find('input[type="checkbox"]:checked');
//					var a = $(this).parents('.cart-goods-list').find('.list-head input[type="checkbox"]');
//					console.log(a);
//					console.log(siblingsSelect);
					
					if(siblings.length == siblingsSelect.length){
						$(this).parents('.cart-goods-list')
						.find('.list-head input[type="checkbox"]')
						.prop('checked',true);
					}
				
				}else{
					that.decreasePayCat($(this));
					$(this).parents('.cart-goods-list')
						.find('.list-head input[type="checkbox"]')
						.prop('checked',false);
				}
				that.payInfo();
				
			})
		},
		//所有商品全选
		selectAll: function(){
			var that = this;
			$('.list-head input[type="checkbox"]').click(function(){
				var allShop = $('.item-box').find('input[type="checkbox"]');
				//如果选中【全选】，将所有店铺选中
				if($(this).prop('checked')){
					allShop.prop('checked',true);
				}else{
					allShop.prop('checked',false);
				}
				that.payInfo();
			});
		},
		//往【付款购物车】中添加商品
		addPayCart:function(obj){
			//把当前商品添加到【结算cookie】中
			var dgid = obj.parents('.item-box').find('.item-table').attr('data-gid');
			var dname = obj.parents('.item-box').find('.item-table').attr('data-gname');
			var gmid = obj.parents('.item-box').find('.col-img').attr('data-node-id');
//			console.log(gmid);
			//如果当前店铺还没有添加商品，添加当前店铺
			if(!this.payCart[dgid]){
				this.payCart[dgid] = {
					dgid: dgid,
					dname: dname,
					goods: {
						length: 0
					}
				};
			}
			//如果店铺中没有当前商品，添加当前商品
			if(!this.payCart[dgid].goods[gmid]){
				this.payCart[dgid].goods[gmid] = this.cart[dgid].goods[gmid];
				this.payCart[dgid].goods.length++;
			}
			console.log(this.payCart[dgid].dname);
		},
		//从【付款购物车】中移除商品
		decreasePayCat: function(obj){
			//把当前商品从【结算cookie】中删除
			var dgid = obj.parents('.item-box').find('.item-table').attr('data-gid');
			var gmid = obj.parents('.item-box').find('.col-img').attr('data-node-id');
			//如果存在当前店铺
			if(this.payCart[dgid]){
				//如果店铺中存在当前商品，删除
				if(this.payCart[dgid].goods[gmid]){
					delete this.payCart[dgid].goods[gmid];
					this.payCart[dgid].goods.length--;
				}
				//如果删除商品后店铺为空，删除店铺
				if(!this.payCart[dgid].goods.length){
					delete this.payCart[dgid];
				}
			}
			console.log(this.payCart);
		},
		//计数和总价处理 （处理【付款购物车】）
		payInfo: function(){
			//payCart
			var goodsTotal = 0;
			var moneyTotal = 0;
			console.log(this.payCart)
			
//			循环变量所有选中的店铺
			for(var shop in this.payCart){
				var shop = this.payCart[shop];
//				//循环遍历当前店铺下选中的商品
				for(var key in shop.goods){
					var goods = shop.goods[key];
//					判断是不是商品（排除length属性）
					if(typeof goods == 'object'){
						goodsTotal += goods.gamount;
						goodsTotal++;
						moneyTotal += goods.gamount * goods.gprice;
					}
				}
			}
//			//如果选中商品，释放付款按钮（高亮，可以点击）
//			if(goodsTotal){
//				$('.cart-option .go-pay').addClass('can-pay');
//			}else{
//				$('.cart-option .go-pay').removeClass('can-pay');
//			}
			$('.cart-bar .user-goods-amount').text(goodsTotal);
			$('#J_cartTotalPrice').text(moneyTotal.toFixed(2));
		},
		//处理基础数据
		optionHandle:function(obj,val){
			//总金额
			var money = obj.parents('.col-num').next();
			//单价
			var price = obj.parents('.col-num').prev();
			//相乘
			var totalMoney = val * parseFloat(price.text());
			//四舍五入
			totalMoney = totalMoney.toFixed(2);
			//设置
			money.text(totalMoney);
			
			console.log(money);
			
			//找到id编号 进行储存
			var gmid = obj.parents('.col-num').siblings('.col-img').attr('data-node-id');
			var dgid = obj.parents('.col-num').siblings().parents('.item-table').attr('data-gid');
//			console.log(gmid,dgid);
			this.cart[dgid].goods[gmid].gamount = val;
			//设置cookie
			this.setCart();
		},
		//读取cookie
		readCart:function(){
			this.cart = $.cookie('xiaomi-cart');
			this.cart = JSON.parse(this.cart);
			
		},
		//设置cookie
		setCart:function(){
			$.cookie('xiaomi-cart',JSON.stringify(this.cart),{expires:15,path:'/xiaomiwang'});
		}
	};
	cartHander.init();
})
//function(){
//	if($(e.target).is('btnSure')){
//		var gmid = $(this).parents('.col-num').siblings('.col-img').attr('data-node-id');
//		var dgid = $(this).parents('.col-num').siblings().parents('.item-table').attr('data-gid');
//		var ul = $(this).parents('.list-body');
//		ul.remove();
//	}
//}var ul = $('.btn-right').parents('.model').siblings('.page-main').find('.list-body')

var model = {
	obj: $('.model'),
	cover: $('.model .cover'),
	content: $('.model .content'),
	fn: null,
	init: function(){
		this.click();
	},
	show: function(fn){
		this.fn = fn;
		this.cover.fadeIn();
		this.content.animate({
			'top':'38%'
		},400)
	},
	hide: function(){
		this.cover.fadeOut();
		this.content.animate({
			'top':'-38%'
		},300);
	},
	click: function(){
		var that = this;
		$('.model').on('click',function(e){
			if($(e.target).is('.model .title,.model .btn-left,.model .cover,.model .btn-right') ){
				that.hide();
			}
			that.fn = null;
		});
		$('.model .btn-right').on('click',function(){
			that.fn && that.fn();
		});
	}
};
model.init();
