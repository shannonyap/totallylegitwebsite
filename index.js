var audio = new Audio('runninginthe90s.mp3');
audio.volume = 0.2;
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.play();

var i = 0;
function epilepticSeizure() {
  var doc = document.getElementById("flashyBackground");
  var color = ["red", "blue", "green"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(epilepticSeizure, 10);


function gottaGoFast() {
 	$("#sanic").animate({left: window.innerWidth}, 100, function() {
 		$("sanic").animate({right: window.innerWidth}, 100, function() {
 			$("sanic").animate({bottom: window.innerWidth}, 100);
 		});
 		$("#sanic").css({"left": ""});
 	});
}

setInterval(gottaGoFast, 10);

var count = 0;
function imGayVid() {
	$("#vidButton").remove();
	//audio.pause();
	var imGay = $("<video>", {width: "500px", height: "500px", src: "imGay.mp4", autoplay: "", id: "imGay"});
	$("#flashyBackground").append(imGay);
	setTimeout(function(){ 
		if (count != 2) {
			imGayVid();
			count++;
		} else {
			audio.play();
			var musicButton = $("<button>", {id: "musicButton", onclick: "changeMusic()"}).html("Turn it up!");
			$("#flashyBackground").append(musicButton);
			clearTimeout();
		}
	}, 3000);
}


function changeMusic() {
	var newAudio = new Audio('youRepostedInTheWrongNeighborhood.mp3');
audio.volume = 0;
newAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
newAudio.play();
}

animateDatBoi();

function animateDatBoi() {
	$("#datboi").animate({"margin-top": '40%'}, 1000, function() {
		$("#datboi").animate({"margin-top": '0%'}, 1000);
		$("#datboi").animate({"margin-left": '20%'}, 1000, function() {
			$("#datboi").animate({"margin-left": '0%'}, 1000, function() {
				animateDatBoi();
			});
		});
	});
}