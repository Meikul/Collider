var system = [];
var idIncrementor = 0;
$(document).ready(function(){
	$('#world').mousedown(function(){
		instThing(event.clientX, event.clientY);
	});
});

function instThing(x, y){
	$('#world').append('<div class="thing" id="'+idIncremenetor+'"></div>');
	$('#world').mousemove(function(){
		
	});
	system.push(new Thing(idIncremenetor, x, y, mass));
	idIncremenetor++;
}

function Thing(idNum, xPos, yPos, m, v=0, e=0){
	this.id = idNum;
	this.x = xPos;
	this.y = yPos;
	this.mass = m;
	this.elasticity = e;
}