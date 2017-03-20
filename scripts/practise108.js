var tree = document.getElementById("tree");
var preorder = document.getElementById('preorder');
var inorder = document.getElementById("inorder");
var posorder = document.getElementById("posorder");
var floororder = document.getElementById("floororder");
var nodeArr = [];


preorder.onclick = function(){
	preOrder(tree);
}

function preOrder(node){
	nodeArr.push(node);
	node = nodeArr.shift();
	console.log(node);
	if(!node==null){
		nodeArr.push(node);
		preOrder(node.firstElementNode);
		
		preOrder(node.lastElementNode);

	}

}

inorder.onclick = function inOrder(node){
	if(!node==null){
		inOrder(node.firstElementNode);
		nodeArr.push(node);
		inOrder(node.lastElementNode);
	}
	console.log(node);
}

posorder.onclick = function posOrder(node){
	if(!node==null){
		posOrder(node.firstElementNode);
		
		posOrder(node.lastElementNode);
		nodeArr.push(node);
	}
	console.log(node);
}

