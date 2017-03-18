
var content = document.getElementById('content').value;
var imports =document.getElementById("imports");
var sums = content.split("[、，。；？！,.;?!]");
var list = document.getElementById("list");
var source = document.getElementById("source");
var search = document.getElementById("search");

imports.onclick = function(){
	
	for (var i = 0 ; i <sums[0].length; i++) {
		var newlist = document.createElement('span');
		newlist.innerText = sums[0][i];
		list.appendChild(newlist);
	}
}

search.onclick = function(){
	var text = source.value.trim();
	var texts = text.split('');
	for(var i = 0 ; i <sums[0].length; i++){
		for(var j = 0;j<texts.length;j++){
			if(texts[j]==sums[0][i]){

				list.childNodes[i+1].style.color = "red"; //查找的结果字体变红
			}
		}
	}
}