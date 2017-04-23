var audio = document.getElementById("audio");
audio.controls = false;
console.log("a");
var playpause = document.getElementById("playpause");
function toogglePausePlay(){
	if(audio.paused || audio.ended){
		playpause.title = "pause";
		playpause.className = "glyphicon glyphicon-pause";
		audio.play();
	}else{
		playpause.title = "play";
		playpause.className = "glyphicon glyphicon-play";
		audio.pause();
	}
}

playpause.onclick = function(){
	toogglePausePlay();
}

function setVolume(){
	var volume = document.getElementById("volume");
	audio.volume = volume.value;
}