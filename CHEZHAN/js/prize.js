	function setCookie (key,value,days) {
		var date=new Date();
		date.setDate(date.getDate()+days);
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
	// console.log(getCookie('Mrs'));
	$('.pr-star img').click(function(){
		if (getCookie('Mrs')) {
			// alert('对不起您已参与抽奖！');
			window.open('http://localhost/CHEZHAN/ycj.html','_blank');
			// return false;
		};
		var num=Math.ceil(Math.random()*12);
		if (num<6) {
			setCookie('Mrs','Mrsyin',30);
			window.open('http://localhost/CHEZHAN/result1.html','_blank');
		}else{
			setCookie('Mrs','Mrsyin',30);
			window.open('http://localhost/CHEZHAN/wzj.html','_blank');			
		};
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