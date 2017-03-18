
//left-in
	var left = document.getElementById("left-in");
	var right = document.getElementById("right-in");
	var turnleft = document.getElementById("left-out");
	var turnright = document.getElementById("right-out");
	var list = document.getElementById("list");
	var newlist = document.createElement("li");
	var figure = document.getElementById("figure");
	var form = document.getElementById("form");

	function newItem(){
	
		var textNode = document.createTextNode(number.value);
	
		newlist.appendChild(textNode);

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
		var a =document.createElement("div");
		a.style.backgroundColor = "red";
		for(j=0;j<list.childNodes.length;j++){
			a.style.width = "20px";
			var b = list.childNodes[j].value;
			a.style.height = "bpx";
		}

	}