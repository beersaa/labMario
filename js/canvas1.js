var y=0;
var x=153;
var dx=2;
var dy=2;

var img = new Image();
img.src='images/sprites/spritedown.png';
var x1=x;
var y1=y;
var n=1;
let a=0;

var coinS = new Image();
coinS.src='images/coin.png';
var collectable=Math.floor(Math.random()*40+20);
var coin=0;
var tab=[0];
var num=0;
var st=0;


var collect = new Audio();
collect.src ='../music/coin.mp3';
collect.oncanplaythrough = function() {
    console.log("Audio is ready");
};

function drawIt() {

	ctx1.fillStyle = "#eedf9e";
	if(n==1){	
		ctx1.fillRect(x,y,1,1);
		
		if(collectable==coin){
			ctx2.drawImage(coinS, x-6, y-6, 10, 10);
			tab[num] = coin;
			num++;
			collectable=collectable+40+Math.floor(Math.random()*90+30);
		}
		
		
	}
	else if(n==2){
		ctx1.clearRect(x-9, y-9, 17, 17);
		ctx2.clearRect(x-9, y-9, 14, 14);		
		ctx1.drawImage(img, x-7, y-7, 12, 12);
		
		if(coin>(tab[num]-6) && coin<(tab[num]+10)){
			collect.play();
			console.log("audio played!")
			if(coin==(tab[num]+2))
				num++;
		}
		
	}
	
	x1=x;
	y1=y;
	coin++;
	
	const coordsX = [153, 169, 201, 123, 169, 185, 249, 233, 265, 249, 233, 217, 185, 139, 169, 199, 217, 233, 247, 263, 281, 251, 217, 201, 185, 199, 185, 169, 137, 169];
	const coordsY = [0, 26, 10, 40, 74, 58, 106, 74, 58, 120, 136, 122, 136, 154, 168, 214, 234, 202, 232, 218, 234, 250, 264, 296, 312, 282, 250, 264, 280, 296, 322];
	
	for(let i=0; i<coordsX.length; i++){
			if(x==coordsX[i] && y>=coordsY[i] && y<=coordsY[i+1])
				y+=dy;
			if(y==coordsY[i] && x>=coordsX[i-1] && x<=coordsX[i])
				x+=dx;  
			if(x==coordsX[i-1] && y<=coordsY[i-1] && y>=coordsY[i])
				y-=dy;
			if(y==coordsY[i] && x<=coordsX[i-1] && x>=coordsX[i])
				x-=dx;
			if(x==169 && y==322){
				x=153;
				y=0;
				coin=0;
				num=0;
				if(n==1){
					n++;						
				}
				else{
					n++;
					document.getElementById("mario").style.transition = "opacity 2s"; 
					document.getElementById("mario").style.opacity = "1";
					ctx1.clearRect(100,200,1000,1000);
				}
			}
	}		
	
	if(y1<y)
		img.src='images/sprites/spritedown.png'
	else if(y1>y)
		img.src='images/sprites/spriteup.png';
	else if(x1<x)
		img.src='images/sprites/spriteright.png';
	else
		img.src='images/sprites/spriteleft.png';
	
}
setInterval(drawIt, 25);


replay.addEventListener('click', function() {
	location.reload();
});

