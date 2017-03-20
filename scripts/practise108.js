var tree = document.getElementById("tree");
var preorder = document.getElementById('preorder');
var inorder = document.getElementById("inorder");
var posorder = document.getElementById("posorder");
var nodes = document.getElementsByTagName("div");
var nodeArr = [];


preorder.onclick = function(){
	preOrder(nodes);
}

function preOrder(node){
	if(node!=null){
		nodeArr.push(node);
		preOrder(node.firstElementNode);
		
		preOrder(node.lastElementNode);
		console.log(nodeArr[0]);
	}

}

inorder.onclick = function(){
	inOrder(nodes);
}

function inOrder(node){
	nodeArr.push(node);
	if(node!=null){

		inOrder(node.firstElementNode);
		nodeArr.push(node);
		inOrder(node.lastElementNode);
		console.log(nodeArr[0]);
	}
}

posorder.onclick = function(){
	posOrder(nodes);
	show();
}

function posOrder(node){
	nodeArr.push(node);
	if(node!=null){
		posOrder(node.firstElementNode);
		
		posOrder(node.lastElementNode);
		nodeArr.push(node);
		console.log(nodeArr[0]);
	}
}

function show(){
	for(var i=0;i<nodeArr[0].length;i++){
		nodeArr[0][i].style.background = 'red';
		setTimeout(console.log(nodeArr[0][i]),1000);
	}
}