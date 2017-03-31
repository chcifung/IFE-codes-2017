var tbody = document.getElementsByTagName('tbody')[0];
var isSort = [false,false,false];
function sortTable(colNum) {
	var colsArr = [];
	var rowsArr = [];
	//把表格中的行和列取出
	for(var i = 0; i< tbody.rows.length;i++){
		rowsArr[i] = tbody.rows[i];
		colsArr[i] = rowsArr[i].cells[colNum];
	}
	console.log(isSort[colNum-1]);

	//对表格中的数据进行排序
	if(isSort[colNum-1]){
		colsArr.reverse();
		isSort[colNum-1] = false;
	}else{
		colsArr.sort(function(a,b){
			return b.innerHTML - a.innerHTML;
		});
		isSort[colNum-1] = true;
	}

	//排序之后放入临时数组中;
	var rowsTem = [];
	for(var i = 0; i< rowsArr.length;i++){
	
		var colsTem = [];//列的集合必须在遍历函数内部
		for(var j=0;j< colsArr.length;j++){
			colsTem[j] = colsArr[i].parentNode.cells[j].innerHTML;
		}
		rowsTem[i] = colsTem;
	}

	//插入页面
	for(var i = 0; i<rowsArr.length;i++){
		for(var j = 0; j <colsArr.length ; j++){
			rowsArr[i].cells[j].innerHTML = rowsTem[i][j];
		}
	}
}

var strength = document.getElementById("strength");
var intellence = document.getElementById("intellence");
var wisdom = document.getElementById("wisdom");
var sum = document.getElementById("sum");

strength.onclick = function(){
	sortTable(1);
}

intellence.onclick = function(){
	sortTable(2);
}

wisdom.onclick = function(){
	sortTable(3);
}

sum.onclick = function(){//添加了一个计算总分的功能
	for(var i=0;i<tbody.rows.length;i++){
		var a = Number(tbody.rows[i].cells[1].innerHTML) + Number(tbody.rows[i].cells[2].innerHTML) + Number(tbody.rows[i].cells[3].innerHTML);
		tbody.rows[i].cells[4].innerHTML= a;
	}
}