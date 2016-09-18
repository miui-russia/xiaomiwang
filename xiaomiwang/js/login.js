$(function(){
	var bLogin = {
		countryContainer: $('.country-container'),
		codeLis: $('.record'),
		listTits: $('.listtit'),
		recordCountry: $('.record-country'),
		recordCode: $('.record-code'),
		listWrap: $('.listwrap'),
		// 验证phone number
		phoneNum:$('.phone-num'),
		tipsError: $('.tips1'),
		tipsError2: $('.tips2'),
		tipsError3: $('.tips3'),
		labelBox:$('.labelbox1'),
		labelBox2:$('.labelbox2'),
		labelBox3:$('.labelbox3'),
		psw: $('.password'),
		pswCheck: $('.password-check'),
		//正则
		reg:/^[1]\d{10}$/,
		reg2:/^[a-zA-Z]{5,}$/,
		
		checkCode:$('.checkcode'),
		tipsError4:$('.tips4'),
		labelboxT:$('.labelbox-t'),
		//验证码
		btn: $('.check'),
		allA: $('.check a'),
		
		init: function(){
			this.clickBlock();
			this.countryLis();
			this.clickOther();
			this.checknode();
			//
			this.checkYam();
			this.ajaxCheck();
		},
		clickBlock: function(){
			var that = this;
			//国家显示
			this.listTits.click(function(){
				that.countryContainer.show();
			})
		},
		countryLis: function(){
			var that = this;
			this.codeLis.each(function(k,v){
				var _this = $(this);
				$(v).on('click',function(e){
					that.countryContainer.hide();
					that.listWrap.find('.select-result').html(_this.html());
//					console.log(_this.html());
//					console.log(e.target);
//					console.log(that.codeLis)
				});
			});
		},
		clickOther: function(){
			var that = this;
			$('body').on('click',function(e){
				if(!$(e.target).is('.country-container') && !$(e.target).is('.select-result')){
					that.countryContainer.hide();
					//非自身区域也可消失
				}
				//console.log(e.target)
			})
		},
		ajaxCheck:function(){
			var validate = {
				uname: true,
				upsw: true,
				uphone: true
			};
			var that = this;
			this.phoneNum.on('blur',function(){
				$.getJSON('js/infodata.json',function(userinfo){
					console.log(userinfo)
					if(!that.reg.test(that.phoneNum.val()) ){
						that.tipsError.show();
						that.labelBox.addClass('error');
					}else{
						that.tipsError.hide();
						that.labelBox.removeClass('error');
					}
					var uname = $('.phone-num').val();
					validate.uname = true;
					for(var i in userinfo){
						if(userinfo[i].phone == uname){
							validate.uname = false;
							that.tipsError.show()
							$('.tips1 span').text('用户名已注册')
							break;
						}
						
					}
					
				})
			});
			this.psw.on('blur',function(){
				if(!that.psw.val()){
					that.tipsError2.show();
					that.labelBox2.addClass('error');
				}else{
					validate.upsw = true;
					that.tipsError2.hide();
					that.labelBox2.removeClass('error');
				}
			});
			this.pswCheck.on('blur',function(){
				if(that.psw.val() != that.pswCheck.val()){
					that.tipsError3.show();
					that.labelBox3.addClass('error');
				}else{
					that.tipsError3.hide();
					that.labelBox3.removeClass('error');
				}
			});
			$('.regin-item').click(function(){
				var flag = true;
				for(var i in validate){
					if(!validate[i]){
						flag = false;
						break;
					}
				}
				if(flag){
					//存储用户名及密码  cookie json形式
					var userinfo = {
						phone: $('.phone-num').val(),
						passwd: $('.password').val(),
						isLogin: false
					};
					$.cookie('userinfo',JSON.stringify(userinfo),{expires:7,path:'/xiaomiwang'});
					var user = JSON.parse( $.cookie('userinfo') );
					//跳转到登录页面
					if($('.phone-num').val()){
						location.href = 'loginreal.html';
					}else{
						return;
					}
					
					console.log(user);
				}else{
					alert('部分数据不合法');
				}
			})
		},
		//验证码校验
		checknode:function(){
			var that = this;
			this.checkCode.on('blur',function(){
				if(that.checkCode.val() != that.allA.text().toLowerCase()){
					that.tipsError4.show();
					
				}else{
					that.tipsError4.hide();
					
				}
			})
		},
		//验证码插件
		checkYam:function(){
			var num = '1234567890';
			var lower = 'abcdefghijklmnopqrstuvwxyz';
			var upper = lower.toUpperCase();
			var sumt = num + lower + upper; 
			var that = this;
			this.btn.click(function(){
				check(that.allA);
				console.log(that.allA.text());
			});
			check(that.allA);
			function check(param){
				var num = '1234567890';
				var lower = 'abcdefghijklmnopqrstuvwxyz';
				var upper = lower.toUpperCase();
				var sumt = num + lower + upper;
				for(var i=0;i<4;i++){
					var a = parseInt(Math.random()*62);//随机四位数
					var c = parseInt(Math.random()*16777216).toString(16);//随机颜色
					param[i].innerHTML = sumt[a];//分别得到下标
					param[i].style.color = '#' + c;
				}
			}
		}
		
	};
	bLogin.init();
	//用户协议模态框
	var modelUser = {
		userClick:$('.userinfo .user-click'),
		closeClick:$('.user-in .title span'),
		cover:$('.user-in .cover'),
		content:$('.user-in .content'),
		init:function(){
			this.userCli();
			this.closeCli();
		},
		userCli:function(){
			var that = this;
			this.userClick.click(function(){
				that.cover.fadeIn('500');
				that.content.animate({
					'top':'47%'
				},500)
			})
		},
		closeCli:function(){
			var that = this;
			that.closeClick.click(function(e){
				that.content.animate({
					'top':'-447%'
				},500)
				that.cover.fadeOut('500');
				console.log(e.target)
			})
		}
	};
	modelUser.init();
});