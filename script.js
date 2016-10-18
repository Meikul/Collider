var system = [];
var idInc = 0;
$(document).ready(function(){
	$('#world').mousedown(function(){
		instThing(event.clientX, event.clientY);
	});
});

function instThing(x, y){
	console.log(x, y);
	$('#world').append('<div class="thing" style="left:'+(x-25)+'px; top:'+(y-25)+'px;" id="'+idInc+'"><div id="massDisplay">0</div></div>');
	var mass;
	$('#world').mousemove(function(event){
		$('#world').mousedown(function(){
			mass = Math.sqrt(Math.pow(Math.abs(event.clientX - x), 2) + Math.pow(Math.abs(event.clientY - y), 2))/10;
			//$(event.target).find('#massDisplay').html(mass);
		});
	});
	system.push(new Thing(idInc, x, y, mass));
	idInc++;
}

function Thing(idNum, xPos, yPos, m, v=0, e=0){
	this.id = idNum;
	this.x = xPos;
	this.y = yPos;
	this.mass = m;
	this.elasticity = e;
}