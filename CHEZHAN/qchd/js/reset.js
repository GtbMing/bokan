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