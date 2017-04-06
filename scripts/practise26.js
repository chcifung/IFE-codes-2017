var container = document.getElementsByClassName("container")[0];
container.oncontextmenu = function(event){
	var menu = document.getElementById("menu");
	menu.style.display = "block";
	menu.style.left = event.clientX+"px";
	menu.style.top = event.clientY+"px";
	console.log(menu.style.top);
	return false;
}

document.onclick = function(){
	var menu = document.getElementById("menu");
	menu.style.display = "none";
}