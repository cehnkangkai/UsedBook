
//书库部分关于书籍图片的处理
$(function(){
	$(".right_books").hover(function(){
		$(this).addClass("find_fa").css("border-bottom","2px solid #48B30F")
			.siblings().removeClass("find_fa").css("border-bottom","2px solid #FFFFFF");
		$(".find_fa").find(".hidden_span").fadeIn();
	}).mouseleave(function(){
		$(".find_fa").css("border-bottom","2px solid #FFFFFF").find(".hidden_span").fadeOut();
	});
	$(".left_books").hover(function(){
		$(this).addClass("find_fa_left").css("border-bottom","2px solid #48B30F")
			.siblings().removeClass("find_fa_left").css("border-bottom","2px solid #FFFFFF");
		$(".find_fa_left").find(".hidden_span_left").fadeIn();
	}).mouseleave(function(){
		$(".find_fa_left").css("border-bottom","2px solid #FFFFFF").find(".hidden_span_left").fadeOut();
	})
})

//书库部分按钮的文字改变
$(function(){
	$(".btn_find").hover(function(){
		$(this).children().html("GO");
	}).mouseout(function(){
		$(this).children().html("去看看");
	})
})

//书库部分按钮背景颜色的改变
$(function(){
	$('.screen li').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
})

//心愿单部分的按钮内容改变
$(function(){
	$(".list_btn").hover(function(){
		$(this).children().html("我去写");
	}).mouseout(function(){
		$(this).children().html("我也想");
	})
})

//首页部分切换公告栏和活动栏
$(function(){
	$('.sec_ul_1').show();
	$(".index_li_1").hover(function(){
		$(".sec_ul_2").hide();
		$(".sec_ul_1").show();
	})
	$(".index_li_2").hover(function(){
		$(".sec_ul_2").show();
		$(".sec_ul_1").hide();
	})
})

//书籍详情页面的图片的显示
$(function(){
	var $li_1=$('.book_ul_1 img');
	var $li_2=$('.book_ul_2 li');
	var index=0;
	$li_2.hover(function(){
		index=$(this).index();
		$li_1.eq(index).addClass("img_find").show()
			.siblings().removeClass("img_find").hide();
	})
})

//心愿单详情页面的点赞动画
$(function(){
	$(".ld_icon").click(function(){
		$(this).css("color","red");
	})
})

//书架部分的图标显示
$(function(){
	$("#bc_book_btn").click(function(){
		$(".bc_icon").toggle();
	})
	$("#bc_wish_btn").click(function(){
		$(".bc_list_icon").toggle();
	})
	$(".bc_icon").click(function(){
		$(this).parent().remove();
	})
	$(".bc_list_icon").click(function(){
		$(this).parent().remove();
	})
})


//个人中心部分的隐藏与显示
$(function(){
	$("#per_btn ").click(function(){
		$(".per_first").toggle();
		$(".per_first_2").toggle();
	})
})

//论坛的评论隐藏和显示
$(function(){
	$(".com_icon_btn").click(function(){
		$(".com_hide").show();
		$(this).hide();
		$(".com_icon_btn_2").show();
	})
	$(".com_icon_btn_2").click(function(){
		$(".com_hide").hide();
		$(this).hide();
		$(".com_icon_btn").show();
	})
})

//物品详情页面的交易按钮
$(function(){
	$("#details_link").click(function(){
		$(".details_fix").show();
	})
	$("#details_fix_btn").click(function(){
		$(".details_fix").hide();
	})
})

//心愿单详情页面的交易按钮
$(function(){
	$("#ld_btn").click(function(){
		$(".ld_fix").show();
	})
	$("#ld_fix_btn").click(function(){
		$(".ld_fix").hide();
	})
})


//物品详情页面的加入购物车按钮
$(function(){
	$("#details_collect").click(function(){
		$(this).html("已加入");
	})
})

////书库页面的下一页按钮
//$(function(){
//	$("#stack_ul_btn").click(function(){
//		var li_index=$("#ul_icon>li").eq().hasClass("active");
//		alert(li_index);
//	})
//})
//书库页面的下面的分页
$(function(){
	$("#ul_icon>li").click(function(){
		$(this).addClass("active")
			.siblings().removeClass("active");
	})
})


$(function(){
	$(function(){
        //文本框失去焦点后
        $('form :input').blur(function(){
            var $parent = $(this).parent();
            $parent.find(".formtips").remove();
            //验证用户名
            if( $(this).is('#username') ){
                if( this.value=="" || this.value.length < 4 || this.value.length > 8 ){
                    var ErrorMsg = '用户名长度在4到8位之间';
                    $parent.append('<span class="formtips onError">'+ErrorMsg+'</span>');
                }else{
                    var OkMsg = '输入正确.';
                    $parent.append('<span class="formtips onSuccess">'+OkMsg+'</span>');
                }
            }
            //验证密码
            if($(this).is('#password')){
                if( this.value=="" || this.value.length < 6 ){
                    var ErrorM = '请输入至少6位的密码。';
                    $parent.append('<span class="formtips onError">' + ErrorM +'</span>');
                }
                else{
                    var OkM ='输入正确.';
                    $parent.append('<span class="formtips onSuccess">' + OkM + '</span>')
                }
            }
            //再次验证密码
            if($(this).is('#repassword')){
                if( this.value=="" || this.value!=password.value ){
                    var ErrorMa = '与上面的密码不一致';
                    $parent.append('<span class="formtips onError">' + ErrorMa +'</span>');
                }
                else{
                    var OkMa ='输入正确.';
                    $parent.append('<span class="formtips onSuccess">' + OkMa + '</span>')
                }
            }
            //验证邮件
            if( $(this).is('#email') ){
                if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
                    var EorMsg = '请输入正确的E-Mail地址.';
                    $parent.append('<span class="formtips onError">'+EorMsg+'</span>');
                }else{
                    var kMsg = '输入正确.';
                    $parent.append('<span class="formtips onSuccess">'+kMsg+'</span>');
                }
            }
            //验证验证是否为空
            if($(this).is('#ver_code')){
            	if( this.value==""){
            		var code_mes = '验证码必须填写';
            		$parent.append('<span class="formtips onError">'+code_mes+'</span>');
            	}
            }
            //$("input[type='checkbox']").is(':checked')
            //验证checkbox是否确认
            if($(this).is('#address')){
            	if(this.ckecked){
            		var addr_mes = '谢谢你的支持';
            		$parent.append('<span class="formtips onError">'+addr_mes+'</span>');
            	}else{
            		var addr_mes = '只有同意协议才能注册';
            		$parent.append('<span class="formtips onError">'+addr_mes+'</span>');
            	}
            }
            
        }).keyup(function(){
            $(this).triggerHandler("blur");
        }).focus(function(){
            $(this).triggerHandler("blur");
        });//end blur


        //提交，最终验证。
        $('#login_btn').click(function(){
            $("form :input.required").trigger('blur');
            var numError = $('form .onError').length;
            if(numError){
                return false;
            }
            else{
                alert("请在邮箱验证成功，注册才能完成，感谢你的支持");
                window.open ("home_page.html","_blank");
            }
        });

        //重置
        $('#res').click(function(){
            $(".formtips").remove();
        });
    })
})