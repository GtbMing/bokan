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
		var num=Math.ceil(Math.random()*8);
		if (getCookie('Mrs')) {
			// alert('对不起您已参与抽奖！');
			window.open('http://localhost/CHEZHAN/ycj.html','_blank');
			// return false;
		};
		if (num<6) {
			setCookie('Mrs','Mrsyin',30);
			window.open('http://localhost/CHEZHAN/cwzj.html','_blank');
		}else{
			setCookie('Mrs','Mrsyin',30);
			window.open('http://localhost/CHEZHAN/wzj.html','_blank');		
		};
	})

	//话费随机数
	var num1=Math.ceil(Math.random()*3);
	if (num1==1) {
		setCookie('Huafei1','buchong',30);
		removeCookie('Huafei2');
		removeCookie('Huafei3');
	}
	if (num1==2) {
		setCookie('Huafei2','buchong',30);
		removeCookie('Huafei1');
		removeCookie('Huafei3');
	}
	if (num1==3) {
		setCookie('Huafei3','buchong',30);
		removeCookie('Huafei1');
		removeCookie('Huafei2');
	}
	console.log(num1);
	console.log(getCookie('Huafei1'));
	console.log(getCookie('Huafei2'));
	console.log(getCookie('Huafei3'));



//窗口缩放
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
