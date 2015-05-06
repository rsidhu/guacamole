var board = document.getElementsByClassName("hole")
var score = 0;
var image = document.getElementById('mole')

function play() {
	function random() {
		image.src = "images/mole.png";
		image.style.display = 'inline-block';
	   	var randomNumber = Math.floor(Math.random() * 4);
	   	document.getElementsByClassName('hole')[randomNumber].appendChild(image);
	   	window.setTimeout("image.style.display = 'none';", 1000); 
	}
	window.setInterval(random, 2000);
}


function whack() {
	window.clearInterval();
    image.src = "images/deadmole.png";
    score++;
    document.getElementById("score").innerHTML=score;
    document.getElementById('hit').play();
}

image.addEventListener('click', whack);
document.getElementById('play').addEventListener('click', play);