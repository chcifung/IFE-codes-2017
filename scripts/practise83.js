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

var volume = document.getElementById("volume");

function setVolume(){

	audio.volume = volume.value;
}

function toggleMute(){
	if(audio.muted){
		volume.className = "glyphicon glyphicon-volume-down";
		audio.volume = volume.value;
		audio.play();
	}else{
	audio.muted = !audio.muted;
	volume.className = "glyphicon glyphicon-volume-off";
	}
}

volume.onclick = function(){
	toggleMute();
}



function updateProgress(){
	var progress = document.getElementById("progress");
	var value = 0;
	value = Math.floor((100/audio.duration)*audio.currentTime);
	progress.style.width = value +"%";
}

audio.addEventListener("timeupdate",updateProgress,false);