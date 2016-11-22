// 城市出现与消失
$('#head1 .hleft').hover(function  () {
	$('.hleft ul').show();
	$('.hleft .baib').show();
	$('.hleft .shd').css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('.hleft li a').click(function  () {
		$('.hleft li a').removeClass('select');			
		$(this).addClass('select');
		$('.baib').width($('.shd').width()+19);
		$('.hleft .shd span').html($(this).html());

		$('.hleft ul').hide();
		$('.hleft .baib').hide();
		$('.hleft .shd').css({'background':'#F1F1F1',
			'borderLeft':'none','borderRight':'none'});
	})
},function  () {
	$('.hleft ul').hide();
	$('.hleft .baib').hide();
	$('.hleft .shd').css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
});

// 我的京东
$('#head1 .hright .my').hover(function  () {
	$(this).children().eq(2).show();
	$(this).children().eq(3).show();
	$(this).children().eq(3).width($(this).width()+14);
	$(this).children().eq(3).css('left','0');
	$(this).css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('#head1 .hright .my').width($('#head1 .hright .my').width()-2);
},function  () {
	$(this).children().eq(2).hide();
	$(this).children().eq(3).hide();
	$(this).css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
	$('#head1 .hright .my').width($('#head1 .hright .my').width()+2);
});

// 手机京东
$('#head1 .hright .shjjd').hover(function  () {
	$(this).children().eq(2).show();
	$('#head1 .hright .shjjd img').show();
	$(this).children().eq(2).width($(this).width()+15);
	$(this).children().eq(2).css('left','0px');
	$(this).css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('#head1 .hright .shjjd').width($('#head1 .hright .shjjd').width()-2);
},function  () {
	$(this).children().eq(2).hide();
	$('#head1 .hright .shjjd img').hide();
	$(this).css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
	$('#head1 .hright .shjjd').width($('#head1 .hright .shjjd').width()+2);
});

//关注京东
 $('#head1 .hright .gzhjd').hover(function  () {
	$(this).children().eq(2).show();
	$('#head1 .hright .gzhjd img').show();
	$(this).children().eq(2).width($(this).width()+15);
	$(this).children().eq(2).css('left','0px');
	$(this).css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('#head1 .hright .gzhjd').width($('#head1 .hright .gzhjd').width()-2);
},function  () {
	$(this).children().eq(2).hide();
	$('#head1 .hright .gzhjd img').hide();
	$(this).css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
	$('#head1 .hright .gzhjd').width($('#head1 .hright .gzhjd').width()+2);
});

 // 客户服务
 $('#head1 .hright .khfw').hover(function  () {
	$(this).children().eq(2).show();
	$(this).children().eq(3).show();
	$(this).children().eq(3).width($(this).width()+14);
	$(this).children().eq(3).css('left','0px');
	$(this).css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('#head1 .hright .khfw').width($('#head1 .hright .khfw').width()-2);
},function  () {
	$(this).children().eq(2).hide();
	$(this).children().eq(3).hide();
	$(this).css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
	$('#head1 .hright .khfw').width($('#head1 .hright .khfw').width()+2);
});

 // 网站导航
  $('#head1 .hright .wzhdh').hover(function  () {
	$(this).children().eq(1).show();
	$(this).children().eq(2).show();
	$(this).children().eq(2).width($(this).width()+15);
	$(this).children().eq(2).css('left','0px');
	$(this).css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('#head1 .hright .wzhdh').width($('#head1 .hright .wzhdh').width()-2);
},function  () {
	$(this).children().eq(1).hide();
	$(this).children().eq(2).hide();
	$(this).css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
	$('#head1 .hright .wzhdh').width($('#head1 .hright .wzhdh').width()+2);
});

// 广告删除
$('.ad .close').click(function  () {
	$('.ad').remove();
})

// 购物车
$('#logo .right').hover(function  () {
	$(this).css({'backgroundColor':'#fff','boxShadow':'0 0 5px rgba(0,0,0,0.2)'})
	$(this).children().eq(2).show();
	$(this).children().eq(3).show();
},function  () {
	$(this).css({'backgroundColor':'#F9F9F9','boxShadow':'none'})
	$(this).children().eq(2).hide();
	$(this).children().eq(3).hide();
})

// 商品分类
$('.content .cen1 .classify li,.content .cen1 .detail .fl').hover(function  () {
	var i=$(this).index();
	var elem=$('.content .cen1 .classify li').eq(i);
	$('.content .cen1 .detail .fl').eq(i).show();
	elem.css('backgroundColor','#f7f7f7');
	elem.children(0).children().css('color','#C81623');
	elem.children('span').html('');
	// $('.cenr').hide();
},function  () {
	var i=$(this).index();
	var elem=$('.content .cen1 .classify li').eq(i);
	$('.content .cen1 .detail .fl').eq(i).hide();
	elem.css('backgroundColor','#C81623');
	elem.children(0).children().css('color','#fff');
	elem.children('span').html('>');
	// $('.cenr').show();
})

// 透明度切换
var time1=null;
var a=0;
var x=0;
function moveLeft () {
	clearInterval(time1);
	time1=setInterval(function  () {	
		a++;
		if(a>=$('.content .inner img').length){
			a=0;
		}
		move();		
	},1500)
}

function move () {
	$('.content .inner img').eq(a).fadeIn(function  () {
		x=0;
	}).siblings().fadeOut();
	$('.content .cenc li').eq(a).addClass('select').siblings().removeClass();
}

moveLeft();

$('.content .cenc').hover(function  () {
	$(' .cenc .left').show();
	$(' .cenc .right').show();
	clearInterval(time1);
},function  () {
	$(' .cenc .left').hide();
	$(' .cenc .right').hide();
	moveLeft();
})

$('.cenc .right').click(function  () {
	if(x==0){
		x=1;
		a++;
		if(a>=$('.content .inner img').length){
			a=0;
		}
	}	
	move();
})

$('.cenc .left').click(function  () {
	if(x==0){
		x=1;
		a--;
		if(a<0){
			a=$('.content .inner img').length-1;
		}
	}	
	move();
})

$('.content .cenc li').stop().hover(function  () {
	if(x==0){
		x=1;
		a=$(this).index();
		move();
	}
})

// 右边tab切换出现
var bj=true;
$('.cenrc ul li').hover(function  () {
	if(bj){
		bj=false;
		var i=$('.cenrc ul li').index(this);
		$('.cenr .tab').slideDown();
		$('.cenr .tab1>div').eq(i).show().siblings().hide();
		$('.cenr .tab ul li').eq(i).addClass('sel').siblings().removeClass('sel');
	}	
},function  () {
	bj=true;
})
$('.tab ul li').hover(function  () {
	var i=$('.tab ul li').index(this);
	$('.cenr .tab1>div').eq(i).show().siblings().hide();
	$('.cenr .tab ul li').eq(i).addClass('sel').siblings().removeClass('sel');
})

function tab (hovers,shows) {
	$(hovers).hover(function  () {
		$('.pger22 .xsh').hide();
		var i=$(hovers).index(this);
		$(this).addClass('show').siblings().removeClass('show');
		$(shows).eq(i).show().siblings().hide();
	})
}

tab('.cenr .tele ol li','.cenr .teles>div');
tab('.cenr .passenger ol li','.cenr .passengers>div');
tab('.cenr .movie ol li','.cenr .movies>div');
tab('.cenr .game ol li','.cenr .games>div');

// 关闭
$('.tab .close').click(function  () {
	$('.cenr .tab').slideUp();
	bj=false;
	setTimeout(function  () {
		bj=true;
	},2000)
})

// 机票小问题
$('.pger22 .xsh').hide();
$('.hehe').click(function  () {
	$('.pger22 .xsh').hide();
})
$('.chx').click(function  () {
	$('.pger22 .xsh').show();
})

// 京东秒杀倒计时
djs();
function djs () {
	var date=new Date();
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	if(60-second<10){
		$('.second').html('0'+(60-second));
	}else{
		$('.second').html(60-second);
	}
	if(60-minute<10){
		$('.minute').html('0'+(60-minute));
	}else{
		$('.minute').html(60-minute);
	}
	$('.hour').html('0'+(hour)%2);
}
setInterval(djs,1000)

//京东秒杀动画效果 
$('.cen3 img,.cen3 p').hover(function (){
	var i=$('.cen3 img,.cen3 p').index(this)/2;
	$('.cen3 img').eq(i).css('transform','translateY(-5px)');
	$('.cen3 p').eq(i).css('color','#E01222');
},function (){
	var i=$('.cen3 img,.cen3 p').index(this)/2;
	$('.cen3 img').eq(i).css('transform','translateY(0px)');
	$('.cen3 p').eq(i).css('color','#999');
})

/* 双11最后24小时 */
$('.cen4 li').hover(function (){
	$(this).css('opacity','0.7')
},function (){
	$(this).css('opacity','1');
})
