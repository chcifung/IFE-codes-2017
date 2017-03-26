var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');

var a1 = document.getElementById("a1");
var b1 = document.getElementById("b1");
var c1 = document.getElementById("c1");
var d1 = document.getElementById("d1");
var e1 = document.getElementById("e1");
var submit =document.getElementById("submit");
var a12=false,b12=false,c12=false,d12=false,e12=false;//设置每个输入框验证状态的初始值

a.onfocus = function(){
	a1.innerText = "必填，长度数为4~16位字符";
}

b.onfocus = function(){
	b1.innerText = "必填，长度数为4~16位字符";
}

c.onfocus = function(){
	c1.innerText = "两次输入相同密码";
}

d.onfocus = function(){
	d1.innerText = "必填，长度数为4~16位字符";
}

e.onfocus = function(){
	e1.innerText = "必填，长度数为4~16位字符";
}

a.onblur = function(){
	
	a11 = a.value.replace(/[\u4e00-\u9fa5]/g,"\u0061\u0061");//把所有的中文字符替换成2个a;
	if(a11.length>3&&a11.length<17){
		a1.style.color = "green";
		a1.innerText = "名称格式正确";
		a.style.border = "1px solid green";
		a12 = true;
	}else if(a11.length == 0){
		a1.style.color = "red";
		a.style.border = "1px solid red";
		a1.innerText= "姓名不能为空";
	}else{
		a1.style.color = "red";
		a.style.border = "1px solid red";
		a1.innerText= "输入长度必须为4-16！";
	}
}



b.onblur = function(){
	
	b11 = b.value.replace(/[\u4e00-\u9fa5]/g,"\u0061\u0061");//把所有的中文字符替换成2个a;
	if(b11.length>3&&b11.length<17){
		b1.style.color = "green";
		b1.innerText = "密码格式正确";
		b.style.border = "1px solid green";
		b12 = true;
	}else if(b11.length == 0){
		b1.style.color = "red";
		b.style.border = "1px solid red";
		b1.innerText= "密码不能为空";
	}else{
		b1.style.color = "red";
		b.style.border = "1px solid red";
		b1.innerText= "输入密码长度必须为4-16！";
	}
}

c.onblur = function(){
	
	c11 = c.value.replace(/[\u4e00-\u9fa5]/g,"\u0061\u0061");//把所有的中文字符替换成2个a;
	if(c11==b11){
		c1.style.color = "green";
		c1.innerText = "二次密码格式正确";
		c.style.border = "1px solid green";
		c12 = true;
	}else{
		c1.style.color = "red";
		c.style.border = "1px solid red";
		c1.innerText= "二次密码必须一致！";
	}
}

d.onblur = function(){
	
	d11 = d.value.replace(/[\u4e00-\u9fa5]/g,"\u0061\u0061");//把所有的中文字符替换成2个a;
	if(d11.length>3&&d11.length<17){
		d1.style.color = "green";
		d1.innerText = "邮箱格式正确";
		d.style.border = "1px solid green";
		d12 = true;
	}else if(d11.length == 0){
		d1.style.color = "red";
		d.style.border = "1px solid red";
		d1.innerText= "邮箱不能为空";
	}else{
		d1.style.color = "red";
		d.style.border = "1px solid red";
		d1.innerText= "邮箱输入长度必须为4-16！";
	}
}

e.onblur = function(){
	
	e11 = e.value.replace(/[\u4e00-\u9fa5]/g,"\u0061\u0061");//把所有的中文字符替换成2个a;
	if(e11.length>3&&e11.length<17){
		e1.style.color = "green";
		e1.innerText = "手机号码格式正确";
		e.style.border = "1px solid green";
		e12 = true;
	}else if(e11.length == 0){
		e1.style.color = "red";
		e.style.border = "1px solid red";
		e1.innerText= "手机号码不能为空";
	}else{
		e1.style.color = "red";
		e.style.border = "1px solid red";
		e1.innerText= "手机号码输入长度必须为4-16！";
	}
}

submit.onclick = function(){
	if(a12&&b12&&c12&&d12&&e12){
		alert("恭喜您！验证通过！");
	}else{
		alert("对不起！验证失败，请重新检查输入格式");
	}
}
