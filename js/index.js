//首页的iscroll
new IScroll(".home")

function bindEvent(){

	$(".container").on("touchend",'a',function(e){
		e.preventDefault();

		var that = $(this).attr("href")

		$(that).css({
			"transition":"all .5s",
			"transform":"translate3d(0,0,0)"
		}).siblings().css({
			"transform":"translate3d(100%,0,0)"
		})

		if(e.target.parentNode.nodeName=="NAV" || e.target.parentNode.parentNode.nodeName=="NAV"){

			var index = $(this).index();

			$("mark").animate({

				left:index*25+"%"

			})

		}


		into($(this))


	})


}
bindEvent();



function into(that){
//进入页面	

	var href = that.attr('href');
	var title = that.attr("title");
	if(href=='#list'){
		//进入了列表页
		$(".header-title").html(title)
		$("#return").show();	
		$("#return").attr("href",'#home');

	}else if(href=='#home'){
		$(".header-title").html("孕育宝典");
		$("#return").hide();
	}


}