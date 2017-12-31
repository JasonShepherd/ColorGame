

var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");



easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];

		} else {
			squares[i].style.display = "none";
		}

	}
	


});

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		

	}
	



})

resetButton.addEventListener("click", function(){
	//todo
	//generate random colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
    pickedColor = pickColor();
	// change color display 
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	this.textContent = "New Colors";

	messageDisplay.textContent = "";

	for(i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}

	h1.style.backgroundColor = "#232323";

});



colorDisplay.textContent = pickedColor;


for(i = 0; i < squares.length; i++) {
	// add colors
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;

		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}


	})

}

function changeColors(color){
		for(i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = color;
		}
	}

	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];

	}


	function generateRandomColors(num) {
		//make an array
		var ranArray = [];
		//itterate num times
		for(var i = 0; i < num; i++){
			// push colors onto array
			ranArray.push(randomColor());

		}
		//return array with num colors
		return ranArray;

	}

	function randomColor(){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb("+ r + ", " + g +", "+ b +")";

	}


