//Global Variables
//========================================

// Arrays and Variables for Holding data

/*
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;  */



var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var randomNumber = 0;

var runningCount = 0;

// Game Counters



var winCount = 0;
var lossCount = 0;





randomNumber = Math.floor(Math.random() * 101) +19;

crystalOne = Math.floor(Math.random() *12) +1;
crystalTwo = Math.floor(Math.random() *12) +1;
crystalThree = Math.floor(Math.random() *12) +1;
crystalFour = Math.floor(Math.random() *12) +1;

console.log(crystalOne);
console.log(crystalTwo);
console.log(crystalThree);
console.log(crystalFour);



// Functions
//=========================================


$("#random-number").text(randomNumber);



$("#crystal-one").text(crystalOne);
$("#crystal-two").text(crystalTwo);
$("#crystal-three").text(crystalThree);
$("#crystal-four").text(crystalFour);



$("#crystal-one").on("click", function() {

	runningCount += crystalOne;

	$("#total-score").text(runningCount);

	if(runningCount === randomNumber) {

		winCount++;
		$("#wins").text(winCount);
		$("#winsLosses").text("You Won");
		
	}

	if(runningCount > randomNumber) {

		lossCount++;
		$("#losses").text(lossCount);
		$("#winsLosses").text("You Lost");
		

	}


});

$("#crystal-two").on("click", function() {

	runningCount += crystalTwo;

	$("#total-score").text(runningCount);

		if(runningCount === randomNumber) {

		winCount++;
		$("#wins").text(winCount);
		$("#winsLosses").text("You Won");
		
	}

	if(runningCount > randomNumber) {

		lossCount++;
		$("#losses").text(lossCount);
		$("#winsLosses").text("You Lost");
		

	}

	
});

$("#crystal-three").on("click", function() {

	runningCount += crystalThree;

	$("#total-score").text(runningCount);

	if(runningCount === randomNumber) {

		winCount++;
		$("#wins").text(winCount);
		$("#winsLosses").text("You Won");

		
	}

	if(runningCount > randomNumber) {

		lossCount++;
		$("#losses").text(lossCount);
		$("#winsLosses").text("You Lost");


	}

	
});

$("#crystal-four").on("click", function() {

	runningCount += crystalFour;

	$("#total-score").text(runningCount);


	if(runningCount === randomNumber) {

		winCount++;
		$("#wins").text(winCount);
		$("#winsLosses").text("You Won");
		
	}

	if(runningCount > randomNumber) {

		lossCount++;
		$("#losses").text(lossCount);
		$("#winsLosses").text("You Lost");
		




	}


});


















// Main Process
//=========================================