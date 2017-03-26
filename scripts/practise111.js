var main = document.getElementById("main");
var traversal = document.getElementById("traversal");
var search = document.getElementById("search");
var nodes = main.getElementsByTagName("div");
var last;
var arrNode = [];
arrNode.push(nodes);
var strings = document.getElementById("strings");
var add = document.getElementById("add");
var deletes = document.getElementById("delete");

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


traversal.onclick = function(){
	traverSal(arrNode);
	show();
}



search.onclick = function(){
	var a = document.getElementById("strings");
	var b = a.value;
	for(var i = 0;i<arrNode[0].length;i++){
		setTimeout(function(i){
			return function(){
				if(last){
					last.style.background = "white";//遍历结束恢复为白色
				}
				if(arrNode[0][i].innerText!=b){
					arrNode[0][i].style.background = "yellow";//遍历用黄色显示
				}else{
					arrNode[0][i].style.background = "red";//匹配到了就用红色显示
					alert("恭喜你找到啦！");
					return;
				}

				last = arrNode[0][i];
			}
		}(i),i*1000);
		
	}

}


function changeIt(){
	for(i = 0; i <arrNode[0].length;i++){
		arrNode[0][i].addEventListener("click",select);
	}
}

changeIt();

 function stopBubble(e) {
        //如果提供了事件对象，则这是一个非IE浏览器
        if ( e && e.stopPropagation )
            //因此它支持W3C的stopPropagation()方法
            e.stopPropagation();
        else
            //否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
    }



function select(){
	this.style.background = "#382389";
	stopBubble(this);//防止时间冒泡
	this.id = "selected";//添加一个类

}

add.onclick = function(){
	var newNode = document.createElement("div");
	newNode.innerText = strings.value;
	console.log(newNode);
	var des = document.getElementById("selected");
	des.appendChild(newNode);
}


deletes.onclick = function(){
	var a = document.getElementById("selected");//Dom需要先知道父元素才能删除某个子元素本身
	a.parentNode.removeChild(a);
}