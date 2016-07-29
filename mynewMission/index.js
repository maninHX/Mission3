// 短线宝产品说明首页
$(function(){
	var deshead='des_all_196';
	
	hxmPageStat(deshead);//页面统计
	hxmScrollBottomStat(deshead+'.bottom');
	var caseName=['dapan','dark','duanxian','zhuizong','hot'];
	var actionInfo_des = document.getElementById("actionInfo_des");
	var arrLi = actionInfo_des.getElementsByTagName('a');	
	for(var i=0;i<arrLi.length;i++){
		arrLi[i].index = i;
		arrLi[i].onclick = function(){
			hxmJumpPageStat(deshead+"."+caseName[this.index],deshead+'_'+caseName[this.index]);
		}
	}	
	
	
	
	var html = '<map name="map" id="map">';
	var width = 0.66*$(window).width();

	html += '<area shape="rect" coords="0,'+0.225*width+','+width+','+0.656*width+'" href ="action_01.html" />';
	html += '<area shape="rect" coords="0,'+0.734*width+','+width+','+1.5*width+'" href ="action_02.html" />';
	html += '<area shape="rect" coords="0,'+1.71*width+','+width+','+1.84*width+'" href ="action_03.html" />';
	html += '<area shape="rect" coords="0,'+1.88*width+','+width+','+2.01*width+'" href ="rdzz/rdzz.html" />';
	html += '<area shape="rect" coords="0,'+2.03*width+','+width+','+2.16*width+'" href ="action_05.html" />';
	html += '<area shape="rect" coords="0,'+2.2*width+','+width+','+2.35*width+'" href ="action_06.html" />';
	for(var i =0;i<6;i++){
	}
	html += '</map>';
	$('body').append(html);


	$('.enter_tit').bind('click',function(){
		$('.enter_des').toggle();
		$('.actionInfo_des').hide();
		$('#actionInfo').find('.point').show();

		if($(this).next('div').css('display') == 'block'){
			hxmClickStat(deshead+'.inlet');
			$(this).children(".point").hide();
			$('.actionInfo').css({
				'position':'fixed',
				'left':'0',
				'bottom':'58px',
			});
		}else{
			$(this).children('.point').show();
			$('.actionInfo').css({
				'position':'static',
				'left':'0',
				'bottom':'0',
			});	
		}
	});

	$('.actionInfo_tit').bind('click',function(){
		$('.actionInfo_des').toggle();
		$('.enter_des').hide();
		$('#enter').find('.point').show();


		$('.actionInfo').css({
			'position':'static',
			'left':'0',
			'bottom':'0',
		});
		if($(this).next('div').css('display') == 'block'){
			$(this).children(".point").hide();
		}else{
			$(this).children('.point').show();		
		}
	});

	
	$('.casecontent').bind('click',function(){
		hxmJumpPageStat(deshead+'.case',deshead+'_case');
		window.location.href="http://testmdev.10jqka.com.cn/vaserviece/mobileshortmessage/index.html?fromsource=szal";
	})


	setTimeout(function(){
		$('#actionInfo').click();
	},10);

})