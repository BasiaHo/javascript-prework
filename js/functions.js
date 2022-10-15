function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printScore(scoreId, scoreValue){
	document.getElementById(scoreId).innerHTML = scoreValue;
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
