
function setCookie (key,value,days) {
		var date=new Date();
		date.setDate(date.getDate()+days);
		// console.log(date);
		document.cookie=key+"="+escape(value)+"; expires="+date;
	}
	function getCookie (key) {
		var arr=document.cookie.split('; ');
		for (var i = 0; i < arr.length; i++) {
			var arr1=arr[i].split('=');
			if (arr1[0]==key) {
				return unescape(arr1[1]);
			};
		};
		return false;
	}
	function removeCookie (key) {
		setCookie (key,'0',-1);
	}
//页面数字&图片路径
if (getCookie('Huafei1')) {
	$('.price').html('10');
	$('.Img1').show();
};
if (getCookie('Huafei2')) {
	$('.price').html('20');
	$('.Img2').show();
};
if (getCookie('Huafei3')) {
	$('.price').html('30');
	$('.Img3').show();
};
$('#cwqrtj').click(function(){
	window.open('http://localhost/CHEZHAN/BackHome.html','_blank');
})

//窗口重置
function ReSet(){
	var Html=document.getElementsByTagName('html')[0];
	var ww=document.documentElement.clientWidth;
	var Scale=100/640;//100是初始根元素的font-size，640是图纸宽度
	Html.style.fontSize=Scale*ww+'px';
}
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