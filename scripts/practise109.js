
var control = document.getElementById("control");

control.onclick = function(){
	var inputs = document.getElementById('inputs');
	var that = document.getElementsByClassName("up")[0];
	
	if(inputs.value == "GO"){
		var a = that.id;
		that.className = "";
		a = a-10;
		var go1 = document.getElementById(a);
		go1.className = "up";
	}else if(inputs.value == "TUN LEF"){
		that.className = "left";
	}else if(inputs.value == "TUN RIG"){
		that.className = "right";
	}else if (inputs.value == "TUN BAC") {
		that.className = "down";
	}else{
		alert("输入的指令有误或为空!");
	}
}
