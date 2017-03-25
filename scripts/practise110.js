var main = document.getElementById("main");
var traversal = document.getElementById("traversal");
var deepfirst = document.getElementById('deepfirst');
var breathfirst = document.getElementById("breathfirst");
var search = document.getElementById("search");
var nodes = main.getElementsByTagName("div");
var last;
var arrNode = [];
arrNode.push(nodes);

function show(){//背景变色
	for(var i = 0;i<arrNode[0].length;i++){
		setTimeout(function(i){
			return function(){
				if(last){
					last.style.background = "white";
				}
				arrNode[0][i].style.background = "#278df4";
				last = arrNode[0][i];
			}
		}(i),i*1000);//时延1秒
	}
}



function traverSal(node){//递归遍历
	if(node){
		for(var i = 0; i< node.length;i++){
			var childs = node[i].children;
			if(childs&&childs.length)	{
				traverSal(childs);
			}
			
		}
	}
}

function depthFirst(node){//非递归深度遍历
	if(node){
		var stack = [];
		for(var i = 0; i< node.length; i++){
			stack.push(node[i]);
		}
		var item;

		while(stack.length){
			item = stack.shift();
			if(item.children&&item.children.length){
				stack = item.children.concat(stack);
			}
		}
	}
}

function breathFirst(node){//非递归广度遍历
	var stack = [];
	for(var i=0;i<node.length;i++){
		stack.push(node[i]);
	}

	var item;
	if(stack.length){
		item = stack.shift();
		if(item.children&&item.children.length){
			stack = stack.concat(item.children);
		}
	}
}

traversal.onclick = function(){
	traverSal(arrNode);
	show();
}

deepfirst.onclick = function(){
	depthFirst(arrNode);
	show();
	
}

breathfirst.onclick = function(){
	breathFirst(arrNode);
	show();
}

search.onclick = function(){
	var a = document.getElementById("strings");
	console.log(a.value);
	console.log(nodes);
}
