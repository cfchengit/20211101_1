function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}
var ang =0
function draw() {
	background(0)
	
	var s = second();  //自動抓取目前操作電腦的時間(秒)
	var m = minute()  //自動抓取目前操作電腦的時間(分鐘)
	var h = hour() //自動抓取目前操作電腦的時間(小時)
	var angleS = map(s,0,60,0,PI*2)
	var angleM = map(m,0,60,0,PI*2)
	var angleH = map(h,0,12,0,PI*2)
	fill('red')
	arc(width/2, height/2, width/2, width/2, -PI/2, angleS-(PI/2), PIE);
	fill('yellow')
	arc(width/2, height/2, width/3, width/3, -PI/2, angleM-(PI/2), PIE);
	fill('white')
	arc(width/2, height/2,width/4, width/4, -PI/2, angleH-(PI/2), PIE);
	fill(0)
	text(h+"點"+m+"分"+s+"秒",width/2-20, height/2+30)
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}