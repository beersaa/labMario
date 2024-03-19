var y = 0;
var x = 153;
var dx = 2;
var dy = 2;

var img = new Image();
img.src = 'images/sprites/spritedown.png';
var x1 = x;
var y1 = y;
var n = 1;
let a = 0;

var sprite = 0;

var coinS = new Image();
coinS.src = 'images/coin.png';
var collectable = Math.floor(Math.random() * 40 + 20);
var coin = 0;
var tab = [0];
var num = 0;
var st = 0;

var coinNum = 0;

var collectBox = document.getElementById('collect-box');
var coinCount = document.getElementById('coin-count');

var collect = new Audio();
collect.src = '../music/coin.mp3';
collect.oncanplaythrough = function () {
	console.log("Audio is ready");
};

function drawIt() {

	ctx1.fillStyle = "#eedf9e";
	if (n == 1) {
		ctx1.fillRect(x, y, 1, 1);

		if (collectable == coin) {
			ctx2.drawImage(coinS, x - 6, y - 6, 10, 10);
			tab[num] = coin;
			num++;
			collectable = collectable + 40 + Math.floor(Math.random() * 90 + 30);
		}


	}
	else if (n == 2) {
		ctx1.clearRect(x - 9, y - 9, 17, 17);
		ctx2.clearRect(x - 9, y - 9, 14, 14);
		ctx1.drawImage(img, x - 7, y - 7, 12, 12);

		if (coin > (tab[num] - 6) && coin < (tab[num] + 10)) {

			collect.play();
			coinNum++;
			console.log("audio played")

			collectBox.className = "collect-box";
			document.getElementById("coin-count").innerHTML = Math.round(coinNum / 8);
			document.body.appendChild(collectBox);

			coin.className = "coin-count";
			document.body.appendChild(coinCount);

			if (coin == (tab[num] + 2))
				num++;
		}

	}

	x1 = x;
	y1 = y;
	coin++;

	const coordsX = [153, 169, 201, 123, 169, 185, 249, 233, 265, 249, 233, 217, 185, 139, 169, 199, 217, 233, 247, 263, 281, 251, 217, 201, 185, 199, 185, 169, 137, 169];
	const coordsY = [0, 26, 10, 40, 74, 58, 106, 74, 58, 120, 136, 122, 136, 154, 168, 214, 234, 202, 232, 218, 234, 250, 264, 296, 312, 282, 250, 264, 280, 296, 322];

	for (let i = 0; i < coordsX.length; i++) {
		if (x == coordsX[i] && y >= coordsY[i] && y <= coordsY[i + 1])
			y += dy;
		if (y == coordsY[i] && x >= coordsX[i - 1] && x <= coordsX[i])
			x += dx;
		if (x == coordsX[i - 1] && y <= coordsY[i - 1] && y >= coordsY[i])
			y -= dy;
		if (y == coordsY[i] && x <= coordsX[i - 1] && x >= coordsX[i])
			x -= dx;
		if (x == 169 && y == 322) {
			x = 153;
			y = 0;
			coin = 0;
			num = 0;
			if (n == 1) {
				n++;
			}
			else {
				n++;
				document.getElementById("mario").style.transition = "opacity 2s";
				document.getElementById("mario").style.opacity = "1";
				ctx1.clearRect(100, 200, 1000, 1000);
				fireworkFinish();
			}
		}
	}

	if (y1 < y) {	//down
		if (sprite == 0) {
			img.src = 'images/sprites/spritedown1.png';
			sprite++;
		}
		else if (sprite == 1) {
			img.src = 'images/sprites/spritedown2.png';
			sprite++;
		}
		else {
			img.src = 'images/sprites/spritedown3.png';
			sprite = 0;
		}
	}
	else if (y1 > y) { //up
		if (sprite == 0) {
			img.src = 'images/sprites/spriteup1.png';
			sprite++;
		}
		else if (sprite == 1) {
			img.src = 'images/sprites/spriteup2.png';
			sprite++;
		}
		else {
			img.src = 'images/sprites/spriteup3.png';
			sprite = 0;
		}
	}

	else if (x1 < x) { //right
		if (sprite == 0) {
			img.src = 'images/sprites/spriteright1.png';
			sprite++;
		}
		else if (sprite == 1) {
			img.src = 'images/sprites/spriteright2.png';
			sprite++;
		}
		else {
			img.src = 'images/sprites/spriteright3.png';
			sprite = 0;
		}
	}

	else {	//left
		if (sprite == 0) {
			img.src = 'images/sprites/spriteleft1.png';
			sprite++;
		}
		else if (sprite == 1) {
			img.src = 'images/sprites/spriteleft2.png';
			sprite++;
		}
		else {
			img.src = 'images/sprites/spriteleft3.png';
			sprite = 0;
		}
	}

}
setInterval(drawIt, 25);


replay.addEventListener('click', function () {
	location.reload();
});

function fireworkFinish() {
	const duration = 15 * 1000,
		animationEnd = Date.now() + duration,
		defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, colors: ["#FBD000"], };

	function randomInRange(min, max) {
		return Math.random() * (max - min) + min;
	}

	const interval = setInterval(function () {
		const timeLeft = animationEnd - Date.now();

		if (timeLeft <= 0) {
			return clearInterval(interval);
		}

		const particleCount = 50 * (timeLeft / duration);

		confetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
			})

		);
		confetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
			})
		);
	}, 250);
}