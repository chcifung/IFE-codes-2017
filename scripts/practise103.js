
//left-in
function leftin(){
	var left = document.getElementById("left-in");
	var newlist = document.createElement("li");
	var textNode = document.getElementById('number');
	var list = document.getElementById("list");
	left.onclick = function(){
		newlist.appendChild(textNode);
		list.insertBefore(newlist,list.childNodes[0]);
	}

}

function rightin(){
	var right = document.getElementById("right-in");
	var newlist = document.createElement("li");
	var textNode = document.getElementById('number');
	var list = document.getElementById("list");
	right.onclick = function(){
		newlist.appendChild(textNode);
		list.insertBefore(newlist,list.childNodes[list.length]);
	}
}

leftin();
rightin();