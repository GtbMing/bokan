
$(document).click(function(){
	$('.rst1-guide').hide();
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