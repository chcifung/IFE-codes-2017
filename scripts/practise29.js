var number = document.getElementById("number");
var letter = document.getElementById("letter");
var test1 = document.getElementById("test1");
var test2 = document.getElementById("test2");
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");

test1.onclick = function(){
	var value1 = number.value;
	var re = /(1[3]\d{9}|1[5]\d{9}|1[8]\d{9})/g;
	var a  = re.test(value1);
	if(a){
		number.style.border = "2px solid green";
		number.style.color = "green";
		
		result1.innerText = "This is a true phonenumber!";
		result1.style.color = "green";
	}else{
		result1.innerText = "This is not a true phonenumber!";
		result1.style.color = "red";
	}
}

test2.onclick = function(){
	var value2 = letter.value;
	var re = /\b([a-z]+) \1\b/g;//\b是字边界元字符，表示只检测单词反向引用
/*对一个正则表达式模式或部分模式两边添加圆括号将导致相关匹配存储到一个临时缓冲区中，所捕获的每个子匹配都按照在正则表达式模式中从左到右出现的顺序存储。缓冲区编号从 1 开始，最多可存储 99 个捕获的子表达式。每个缓冲区都可以使用 \n 访问，其中 n 为一个标识特定缓冲区的一位或两位十进制数。
可以使用非捕获元字符 ?:、?= 或 ?! 来重写捕获，忽略对相关匹配的保存。
反向引用的最简单的、最有用的应用之一，是提供查找文本中两个相同的相邻单词的匹配项的能力。
捕获的表达式，正如 [a-z]+ 指定的，包括一个或多个字母。正则表达式的第二部分是对以前捕获的子匹配项的引用，即，单词的第二个匹配项正好由括号表达式匹配。\1 指定第一个子匹配项。*/
	var b = value2.match(re);
	if(b){
		letter.style.border = "2px solid green";
		letter.style.color = "green";
		result2.innerText = "This is a true successful strings!";
		result2.style.color = "green";
	}else{
		result2.innerText = "This is not a true same strings!";
		result2.style.color = "red";
	}
	
}

//我的理解： 先找一个单词，再找空格和引用这个单词，即为/\d([a-z+]) \1\d/gi; \1便是第一个匹配项