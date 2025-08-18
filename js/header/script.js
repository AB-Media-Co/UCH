/*=====SWITCHING FUNCTIONALITY IN LOGIN=====*/

	(function(){
		
		$(window).load(function(){
	
    //PRELOADER
    $('#preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.

});
	
   $(".wpcf7-textarea").attr("id" , "w150");
  $(".wpcf7-textarea").attr("maxlength" , "150");
		var win_width =$(document).width();
		if(win_width<=1100){
			var header_height=$("header").height();
		var banner_below_section=$(".banner_below_section").height();
		var win_height =$(window).height();
		var height_to_use=win_height-(header_height+banner_below_section+19);
		$(window).load(function(){
			$(".carousel-inner .item").css("min-height","inherent");
			});
			}
			else{
				var header_height=$("header").height();
				var banner_below_section=$(".banner_below_section").height();
				var carousel_attr=$(".carousel-inner .item").attr("style");
				var win_height =$(window).height();
				var height_to_use=win_height-(header_height+banner_below_section+19);
				$(window).load(function(){
					$(".carousel-inner .item").css("min-height",height_to_use);
					});
				}
				
		if(win_width<=767){
			/*============stack section banner height==========*/
				$(window).load(function() {
					$(".double_section").css("height","auto");
				/*======================legacy section================*/
				$(".legacy_section .content").css("padding-top","auto");
				});
				$(".stack_section").each(function() {
						var top_height = $(this).find(".top,.nostalgia_text").innerHeight();
					var top_inner_height = $(this).find(".top .inner_text,.nostalgia_text .inner_text").height();
					var half_height =(top_height-top_inner_height)/2;
					$(this).find(".top,.nostalgia_text").css("padding-top",half_height);
					$(this).find(".top,.nostalgia_text").css("padding-bottom",half_height);
					});
                   
				
			}
			else{
				$(window).resize(function() {
					var nostalgia_section = $(".nostalgia_section").height();
					/*$(".nostalgia_section .img-responsive").css("height",nostalgia_section);*/
					$(".nostalgia_text").css("min-height",nostalgia_section); 
				});
				/*============stack section banner height==========*/
				 $(window).load(function() {
					var nostalgia_section = $(".nostalgia_section").height();
					/*$(".nostalgia_section .img-responsive").css("height",nostalgia_section);*/
					$(".nostalgia_text").css("min-height",nostalgia_section); 
					var long_img = $(".long_img img").height();
					$(".top,.bottom").css("min-height",long_img/2);
					$(".double_section").css("height",long_img);
					/*======================legacy section================*/
					/*var legacy_banner_ht = $(".legacy_section").height(); 
					var legacy_content_ht = $(".legacy_section .content").height();
					var avg_ht = legacy_banner_ht-legacy_content_ht ;
					var half_avg_ht =avg_ht/2;
					$(".legacy_section .content").css("padding-top",half_avg_ht);*/
					
					$(".stack_section").each(function() {
						var top_height = $(this).find(".top,.nostalgia_text").innerHeight();
					var top_inner_height = $(this).find(".top .inner_text,.nostalgia_text .inner_text").height();
					var half_height =(top_height-top_inner_height)/2;
					$(this).find(".top,.nostalgia_text").css("padding-top",half_height);
					$(this).find(".top,.nostalgia_text").css("padding-bottom",half_height);
					});
                   
					
				});
				$(window).resize(function() {
					var nostalgia_section = $(".nostalgia_section").height();
					/*$(".nostalgia_section .img-responsive").css("height",nostalgia_section);*/
					$(".nostalgia_text").css("min-height",nostalgia_section); 
					var long_img = $(".long_img img").height();
					$(".top,.bottom").css("min-height",long_img/2);
					$(".double_section").css("height",long_img);
					/*======================legacy section================*/
					/*var legacy_banner_ht = $(".legacy_section").height(); 
					var legacy_content_ht = $(".legacy_section .content").height();
					var avg_ht = legacy_banner_ht-legacy_content_ht ;
					var half_avg_ht =avg_ht/2;
					$(".legacy_section .content").css("padding-top",half_avg_ht);*/
				});
				
				}
		
		
		 if(window.location.href=== "http://indiareputation.com/development/an/uch/expirence.html") {
        $('.expirence_section').addClass('current');
     }
		
  
var y = "";
$(".my-tab ul li").click(function(){
	var data_tab = $(this).attr("data-tab");
	$(".my-tab ul li").removeClass("active");
	$(".tab_content").removeClass("active");
	$(this).addClass("active");
	$("#"+data_tab).addClass("active");
	 var x = $(".my-tab ul li.active").attr("data-tab");
	
	$(".month_contentx").css("display","none");
	$(".month_contentx."+x).css("display", "block");
	});

$(".reservation a,.telephone a").mouseenter(function() {
      $(this).addClass("show");
    });
    $(".reservation a,.telephone a").mouseleave(function() {
        $(this).removeClass("show");
    });

$(window).scroll(function() {
	var winheight = $("body").scrollTop()||$("html").scrollTop();
	
	if(winheight>=100){
		$("header").addClass("fixed");
		$("header").addClass("fadeInDown");
		$(".top_line").addClass("top_line_scroll");
		$(".left_line").addClass("left_line_scroll");
		$(".right_line").addClass("right_line_scroll");
		$(".logo").addClass("fixed");
		}
		
		else{
			 $("header").removeClass("fixed");
			 $(".top_line").removeClass("top_line_scroll");
		$(".left_line").removeClass("left_line_scroll");
		$(".right_line").removeClass("right_line_scroll");
		$(".logo").removeClass("fixed");
		
			}

});

$(window).scroll(function(){
	
	if($(window).scrollTop() + $(window).height() >= $(document).height() -45) {
	 $(".left_line,.right_line").addClass("fixed");
	}
	else if($(window).scrollTop() + $(window).height() >= $(document).height()) {
	 $(".left_line,.right_line").addClass("fixed");
	}
	else{
		 $(".left_line,.right_line").removeClass("fixed");
		}
	
	});
	
	/*if($(window).height() >$("html").height()){
		var html_height = $("html").height();
		var final_height =html_height-190;
		$(".left_line,.right_line").css('min-height', final_height);
		 
	}
	else{
		 $(".left_line,.right_line").removeClass("fixed02");
		}*/
	
	
	}).call(this);
	
	

