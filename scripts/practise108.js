var tree = document.getElementById("tree");
var preorder = document.getElementById('preorder');
var inorder = document.getElementById("inorder");
var posorder = document.getElementById("posorder");
var nodes = tree.getElementsByTagName("div");
var nodeArr = [];
var last;


preorder.onclick = function(){
	preOrder(nodes);
	show();
}

function preOrder(node){
	if(node){
		nodeArr.push(node);
		preOrder(node.firstElementNode);
		
		preOrder(node.lastElementNode);
		
	}

}

inorder.onclick = function(){
	inOrder(nodes);
	show();
}

function inOrder(node){
	nodeArr.push(node);
	if(node){

		inOrder(node.firstElementNode);
		nodeArr.push(node);
		inOrder(node.lastElementNode);
		
	}
}

posorder.onclick = function(){
	posOrder(nodes);
	show();
}

function posOrder(node){
	nodeArr.push(node);
	if(node){
		posOrder(node.firstElementNode);
		
		posOrder(node.lastElementNode);
		nodeArr.push(node);
		console.log(nodeArr[0]);
	}
}

function show(){
	for(var i=0;i<nodeArr[0].length;i++){
		setTimeout(function(i){
			return function(){
				if(last){
					last.style.background = "white";
				}
				nodeArr[0][i].style.background = '#009a61';
				last = nodeArr[0][i];
			}
		}(i),i*1000);
		
		
	}
}