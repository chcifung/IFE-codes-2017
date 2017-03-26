var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('b');
var btna = document.getElementById('btna');
var btnb = document.getElementById('btnb');
var btnc = document.getElementById('btnc');
//var reg = [\u4e00-\u9fa5];//中文字符

btna.onclick = function(){
	
	a1 = a.value.replace(/[\u4e00-\u9fa5]/g,"\u0061\u0061");//把所有的中文字符替换成2个a;
	console.log(a1.length);
}

