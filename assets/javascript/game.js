var letterChoices =
[
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'
];

var wins = 1;
var losses = 1;
var guesses = 7;
var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
	console.log(computerGuess);

document.onkeyup = function(event) {

	letterGuess = event.key.toLowerCase();
	document.getElementById("guess-letter").innerHTML = ("Letters Guessed: " + letterGuess);

if (letterGuess === computerGuess){
    alert('Great Job, ' + computerGuess + ' was the correct answer.');
    document.getElementById("total-win").innerHTML = ("Wins: " + wins++);
    replay();
	console.log('wins');
}

else if (letterGuess !== computerGuess){
	guesses--;

	console.log(guesses);
}

if (guesses === 0){
	alert('You lose!');
	alert('The correct answer was ' + computerGuess);
	document.getElementById("total-loss").innerHTML = ("Losses: " + losses++);
	replay();
}

}

var replay = function(){
	computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
	console.log(computerGuess);

	guesses = 7;
}



// var html = "<p>Press any key to start playing!</p>" +
// "<p>Wins: " + wins + "</p>" +
// "<p>Losses: " + losses + "</p>";

// document.querySelector("#game").innerHTML = html;



