var configs = {
        'offset': [3,5],        //微调浮出层的位置            
        'triggerElement': '',          //需要绑定划过显示浮出层事件的元素选择器    
        'rootId':'',                        //triggerElement的父节点选择器,可以不指定,如果不指定，默认为body
        'width': 100,                       //浮出层的宽度，默认为100
        'showArrow': true,                  //是否显示浮出层上的箭头，默认显示
        'arrowPosition':'topLeftArrow',     //如果要显示浮出层上的箭头，那么箭头的方向是什么（左上角，右上角，左下角，右下角）？默认左上角
        'adaptPopLayerPostion': true,       //是否要自适应浮出层的位置，如果要自适应的话，箭头的位置就是默认的左上角了，当浮出层自动调整了位置后，箭头的位置也会自动调整，用户设置的箭头位置并不起作用。
        'needLoadingImg':false                  //浮出层中是否需要Loading图标，这是为了异步地请求数据时，等待数据返回并渲染这段时间时显示正在加载的图标，当数据返回时，会用返回的数据替换这个图标。
    };

var display = document.getElementById('display');
var close = document.getElementById("close");
var view = document.getElementsByClassName("view")[0];
var model = document.getElementsByClassName("model")[0];
var confirm = document.getElementById("confirm");
var cancel = document.getElementById("cancel");

display.onclick = function(){
	view.style.display = "block";
	model.style.display = "block";
}

close.onclick = function(){
	view.style.display = "none";
	
}

model.onclick = function(){
	view.style.display = "none";
	model.style.display = "none";
}

confirm.onclick = function(){
    view.style.display = "none";
    
}

cancel.onclick = function(){
    view.style.display = "none";
    
}