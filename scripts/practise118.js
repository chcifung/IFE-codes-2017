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
	console.log(colsArr);

	//对表格中的数据进行排序
	if(isSort[colNum]){
		colsArr.reverse();
		isSort[colNum] = false;
	}else{
		colsArr.sort(function(a,b){
			return b.innerHTML - a.innerHTML;
		});
		isSort[colNum] = true;
	}

	//排序之后放入临时数组中;
	var rowsTem = [];
	var colsTem = [];
	for(var i = 0; i< rowsArr.length;i++){
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

strength.onclick = function(){
	sortTable(0);
}

intellence.onclick = function(){
	sortTable(1);
}

wisdom.onclick = function(){
	sortTable(2);
}