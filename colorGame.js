var colors = generateRandomColors(6);


// ["rgb(255, 0, 0)", 
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)"
// ]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];
	// add click listeners to each square
	squares[i].addEventListener("click", function(){
		// get color of clicked square
		var clickedColor = this.style.background;
		// compare color to clicked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		// change each color to match correct answer color
		squares[i].style.background = color;
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array 
	var arr = []
	// add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	// return array
	return arr;
}

// uses RGB(red, green, blue) color formatting numbered 0 to 255 for color strength
function randomColor(){
	// pick a "red"
	var r = Math.floor(Math.random() * 256);
	// pick a "green"
	var g = Math.floor(Math.random() * 256);
	// pick a "blue"
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}