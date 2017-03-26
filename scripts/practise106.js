var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var school = document.getElementById("school");
var val0 = document.getElementById("0");
var val10 = document.getElementById("10");
var val20 = document.getElementById("20");
var val30 = document.getElementById("30");
var val40 = document.getElementById("40");
var val50 = document.getElementById("50");

function ini(){
			val10.style.display = "block";
			val20.style.display = "none";
			val30.style.display = "none";
			val40.style.display = "none";
			val50.style.display = "none";
}

ini();

op1.onclick = function(){
	job.style.display = "none";
	school.style.display = "block";
}

op2.onclick = function(){
	school.style.display = "none";
	job.style.display = "block";
}

val0.onchange = function(){
	var province = this.options[this.options.selectedIndex].value;
			
	
	if(province==1){
			val10.style.display = "block";
			val20.style.display = "none";
			val30.style.display = "none";
			val40.style.display = "none";
			val50.style.display = "none";
		//	break;
	}else if(province==2){
			val10.style.display = "none";
			val20.style.display = "block";
			val30.style.display = "none";
			val40.style.display = "none";
			val50.style.display = "none";
	}else if(province==3){
			val10.style.display = "none";
			val20.style.display = "none";
			val30.style.display = "block";
			val40.style.display = "none";
			val50.style.display = "none";
	}else if(province==4){
			val10.style.display = "none";
			val20.style.display = "none";
			val30.style.display = "none";
			val40.style.display = "block";
			val50.style.display = "none";
	}else if(province==5){
			val10.style.display = "none";
			val20.style.display = "none";
			val30.style.display = "none";
			val40.style.display = "none";
			val50.style.display = "block";
	}

}