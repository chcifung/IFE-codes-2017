
//left-in
function leftin(){
	var left = document.getElementById("left-in");
	left.onclick = function(){
		document.getElementById('list').innerText=document.getElementById('number').value;;
	}

}

leftin();