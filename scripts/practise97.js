var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var btna = document.getElementById('btna');
var btnb = document.getElementById('btnb');
var btnc = document.getElementById('btnc');
var a1 = document.getElementById("a1");
var b1 = document.getElementById("b1");
var c1 = document.getElementById("c1");

btna.onclick = function(){
	
	a11 = a.value.replace(/[\u4e00-\u9fa5]/g,"\u0061\u0061");//把所有的中文字符替换成2个a;
	if(a11.length>3&&a11.length<17){
		a1.style.color = "green";
		a1.innerText = "名称格式正确";
		a.style.border = "1px solid green";
	}else if(a11.length == 0){
		a1.style.color = "red";
		a.style.border = "1px solid red";
		a1.innerText= "姓名不能为空";
	}else{
		alert("请输入长度为4-16个字符！");
	}
}

btnb.onclick = function(){
	
	b11 = b.value.replace(/[\u4e00-\u9fa5]/g,"\u0061\u0061");//把所有的中文字符替换成2个a;
	if(b11.length>3&&b11.length<17){
		b1.style.color = "green";
		b1.innerText = "名称格式正确";
		b.style.border = "1px solid green";
	}else if(b11.length == 0){
		b1.style.color = "red";
		b.style.border = "1px solid red";
		b1.innerText= "姓名不能为空";
	}else{
		alert("请输入长度为4-16个字符！");
	}
}

btnc.onclick = function(){
	
	c11 = c.value.replace(/[\u4e00-\u9fa5]/g,"\u0061\u0061");//把所有的中文字符替换成2个a;
	if(c11.length>3&&c11.length<17){
		c1.style.color = "green";
		c1.innerText = "名称格式正确";
		c.style.border = "1px solid green";
	}else if(c11.length == 0){
		c1.style.color = "red";
		c.style.border = "1px solid red";
		c1.innerText= "姓名不能为空";
	}else{
		alert("请输入长度为4-16个字符！");
	}
}
