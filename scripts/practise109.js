var inputs = document.getElementById('inputs');
var control = document.getElementById("control");

control.onclick = function(){
	var that = document.getElementsByClassName("up");
	console.log(that);
	if(inputs.value == "GO"){
		var go;
		go.id =that.id +1;
		alert(go.id);
	}else if(inputs.value == "TUN LEF"){
		alert("2");
	}else if(inputs.value == "TUN RIG"){
		alert("3");
	}else if (inputs.value == "TUN BAC") {
		alert("4");
	}else{
		alert("输入的指令有误或为空!");
	}
}
