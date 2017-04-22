var audio = document.getElementById("audio");
audio.controls = false;
console.log("a");
var playpause = document.getElementById("playpause");
function toogglePausePlay(){
	if(audio.paused || audio.ended){
		playpause.title = "pause";
		playpause.innerHTML = "pause";
		audio.play();
	}else{
		playpause.title = "play";
		playpause.innerHTML = "play";
		audio.pause();
	}
}

playpause.onclick = function(){
	toogglePausePlay();
}