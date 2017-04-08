var number = document.getElementById("number");
var letter = document.getElementById("letter");
var test1 = document.getElementById("test1");
var test2 = document.getElementById("test2");
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");

test1.onclick = function(){
	var value1 = number.value;
	var a = value1.split("");
	var b = value1.replace(/[0-9]/g,"A");
	if(a[0]==1&&(a[1]==3||a[1]==5||a[1]==8)&&a.length==11&&b=="AAAAAAAAAAA"){
		number.style.border = "2px solid green";
		number.style.color = "green";
		
		result1.innerText = "This is a true phonenumber!";
		result1.style.color = "green";
	}else{
		result1.innerText = "This is not a true phonenumber!";
		result1.style.color = "red";
	}
}

test2.onclick = function(){
	var value2 = letter.value;
}