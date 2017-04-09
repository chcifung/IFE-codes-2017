var intents = document.getElementById("intents");
var submit = document.getElementById("submit");
var right = document.getElementsByClassName("right")[0];
var intent = intents.value;
var re1 = /(\#){1}(\S*)/g;//h1
var re12 = /(\#){2}(\S*)/g;//h2
var re13 = /(\#){3}(\S*)/g;//h3
var re14 = /(\#){4}(\S*)/g;//h4
var re15 = /(\#){5}(\S*)/g;//h5
var re16 = /(\#){6}(\S*)/g;//h6
var re2 = /\!\[(.*?)\]\((.*?)\)/gi;//picture
var re3 = /\[(.*?)\]\((.*?)\)/gi;//link
var re4 = /(\*\s*)(\S*)/g;//list
var re5 = /(\`){3}([\s\S]*?)(\`){3}/g;//code

submit.onclick = function(){
	right.innerHTML = intents.value.replace(re16,"<h6>$2</h6>");
	right.innerHTML = right.innerHTML.replace(re15,"<h5>$2</h5>");
	right.innerHTML = right.innerHTML.replace(re14,"<h4>$2</h4>");
	right.innerHTML = right.innerHTML.replace(re13,"<h3>$2</h3>");
	right.innerHTML = right.innerHTML.replace(re12,"<h2>$2</h2>");
	right.innerHTML = right.innerHTML.replace(re1,"<h1>$2</h1>");
	right.innerHTML = right.innerHTML.replace(re4,"<li>$2</li>");
	right.innerHTML = right.innerHTML.replace(re2,'<img src="$2" alt="$1">');
	right.innerHTML = right.innerHTML.replace(re3,'<a href="$2">$1</a>');
	
	right.innerHTML = right.innerHTML.replace(re5,"<pre><code>$2</code></pre>");
}