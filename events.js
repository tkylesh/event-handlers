

function target(event)
{
	document.getElementById('output-target').innerHTML = `${event.target.nodeName}`;
}

function h1Hover(){
	document.getElementById('output-target').innerHTML = `you moved you mouse over the header`;
}
function h1Leave(){
	document.getElementById('output-target').innerHTML = `You left me!!`;
}

function keyUp(){
	document.getElementById('output-target').innerHTML = document.getElementById('keypress-input').value;
}

function colorChange(){
	document.getElementById('guinea-pig').style.color = "blue";
}
function fontsizeChange(){
	document.getElementById('guinea-pig').style.fontSize = "xx-large";
}
function addBorder(){
	document.getElementById('guinea-pig').style.border = "thick solid blue";
}
function roundIt(){
	document.getElementById('guinea-pig').style.borderRadius = "25px";
}