
//left-in
	var left = document.getElementById("left-in");
	var right = document.getElementById("right-in");
	var turnleft = document.getElementById("left-out");
	var turnright = document.getElementById("right-out");
	var list = document.getElementById("list");
	var newlist = document.createElement("li");
	var figure = document.getElementById("figure");
	var form = document.getElementById("form");
	var compare = document.getElementById("compare");
	var compares = document.getElementById("compares");

	function newItem(){
	
		var textNode = document.createTextNode(number.value);
		if(number.value>9&&number.value<101){
			newlist.appendChild(textNode);
		}else{
			alert("您输入数值范围不正确");
		}
	}

	
	left.onclick = function (){
		newItem();
		list.insertBefore(newlist,list.childNodes[0]);
	}

	right.onclick = function(){
		newItem();
		list.appendChild(newlist);
	}

	turnleft.onclick = function(){
		list.removeChild(list.childNodes[0]);
	}

	turnright.onclick = function(){
		var i = list.childNodes.length-1;
		list.removeChild(list.childNodes[i]);
	}

	figure.onclick = function(){
		var lists = document.getElementsByTagName("li");
		
		for(var j=0;j<lists.length;j++){
			var a =document.createElement("p");
			a.style.width = "20px";
			var b = lists[j].innerText;
			
			a.style.height = b*4+"px";
			a.style.background = "yellow";
			a.style.left = j*25 +"px";
			form.appendChild(a);
		}
		
	}

	compare.onclick = function(){
		var a = [];
		var lists = document.getElementsByTagName("li");
		for(var k = 0;k<lists.length;k++){
			a.push(lists[k].innerText);
			a.sort();
		}
		for(var l=0;l<a.length;l++){
			var b = document.createElement('span');
			b.innerText = a[l];
			console.log(b);
			compares.appendChild(b);
		}
		

		
	}