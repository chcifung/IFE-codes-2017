
var control = document.getElementById("control");

control.onclick = function(){
	var inputs = document.getElementById('inputs');
	var that = document.getElementsByClassName("up")[0];
	var a = Number(that.id);
	if(inputs.value == "TRA TOP"){
		that.className = "";
		a = -10;
		var go1 = document.getElementById(a);
		go1.className = "up";
	}else if(inputs.value == "TRA LEF"){
		that.className = "";
		a -=1;
		var go1 = document.getElementById(a);
		go1.className ="up";
	}else if(inputs.value == "TRA RIG"){
		that.className = "";
		a +=1;
		var go1 = document.getElementById(a);
		go1.className ="up";
	}else if (inputs.value == "TRA BOT") {
		that.className = "";
		a +=10;
		var go1 = document.getElementById(a);
		go1.className ="up";
	}else if (inputs.value == "MOV LEF") {
		that.className = "";
		a -=1;
		var go1 = document.getElementById(a);
		go1.className ="left"+" "+"up";
	}else if (inputs.value == "MOV TOP") {
		that.className = "";
		a = -10;
		var go1 = document.getElementById(a);
		go1.className = "up"+" "+"up";
	}else if (inputs.value == "MOV RIG") {
		that.className = "";
		a +=1;
		var go1 = document.getElementById(a);
		go1.className ="right"+" "+"up";
	}else if (inputs.value == "MOV BOT") {
		that.className = "";
		a +=10;
		var go1 = document.getElementById(a);
		go1.className ="down"+" "+"up";
	}else{
		alert("请您输入对的指令哦!");
	}
}
