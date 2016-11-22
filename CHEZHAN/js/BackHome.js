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
//输入框
// console.log($('.BHome-Name input').length)
$('.BHome-ipt1').focus(function (){
	if ($(this).val()=='请输入姓名') {
		$(this).val('')
	};	
})
$('.BHome-ipt2').focus(function (){
	if ($(this).val()=='请输入手机号码') {
		$(this).val('')
	};	
})
$('.BHome-ipt1').focusout(function (){
	if ($(this).val().length==0) {
		$(this).val('请输入姓名');
	};
})
$('.BHome-ipt2').focusout(function (){
	if ($(this).val().length==0) {
		$(this).val('请输入手机号码');
	};	
})

//提交
$('.BHome-Sub').click(function(){
	setCookie('Name',$('.BHome-ipt1').val(),30)
	setCookie('Phone',$('.BHome-ipt2').val(),30)
	var Txt1=getCookie('Name');
	var Txt2=getCookie('Phone');
	$('.BHome-ipt1').val(Txt1);
	$('.BHome-ipt2').val(Txt2);
	if (getCookie('Name')) {
		alert('对不起，您已经注册！')
	};
	if (getCookie('Phone')) {
		alert('对不起，您已经注册！')
	};
	$('.BHome-mask').show();
	$('.BHome-Success').show();	
})
//不见不散
$('.BHome-Notloose').click(function(){
	window.open('http://localhost/CHEZHAN/czsy.html','_blank');
})
$('.BHome-Rul span').click(function(){
	$('.BHome-mask').show();
	$('.BHome-active').show();
})
$('.BHome-nkow').click(function(){
	// alert('1111');
	window.open('http://localhost/CHEZHAN/BackHome.html','_self');
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
