$('.sy-con1').click(function(){
	$('.sy-mask').show();
	$('.sy-alert').show();
})
$('.sy-btom').click(function(){
	$('.sy-mask').show();
	$('.sy-direction').show();
})
// $('.sy-sure').click(function(){
// 	window.open('http://localhost/CHEZHAN/prize.html','_blank');
// })
$('.sy-sure1').click(function(){
	$('.sy-mask').hide();
	$('.sy-alert').hide();
	$('.sy-direction').hide();
})

//窗口重置
function ReSet(){
		var HTML=document.getElementsByTagName('html')[0];
		var ww=document.documentElement.clientWidth;//窗口宽度
		var scale=ww/640;//640是设计图psd的宽度
		HTML.style.fontSize=100*scale+'px';
	}
ReSet();
window.onresize=function (){
	ReSet();
}