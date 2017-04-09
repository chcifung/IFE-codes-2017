var number = document.getElementById("number");
var letter = document.getElementById("letter");
var test1 = document.getElementById("test1");
var test2 = document.getElementById("test2");
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");

test1.onclick = function(){
	var value1 = number.value;
	var re = /(1[3]\d{9}|1[5]\d{9}|1[8]\d{9})/g;
	var a  = re.test(value1);
	if(a){
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
	var a  = value2.split(" ");
	for(var i = 0;i<a.length;i++){
		var result2 = value2.match(a[i]);
		if(result2.length==null){
			console.log("a");
		}
	}
}