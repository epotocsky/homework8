// Variables!
var radius = 15;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");

// I would add more variables for x, y, radius, and color
var draws = true;
var defaultColor = true;


//Listeners!!
//Add a listener for loading the window
window.addEventListener("load", function(){
	ctx.canvas.width = window.innerWidth * 0.75;
	ctx.canvas.height = window.innerHeight * 0.75;
	console.log("Window is loading.");
})
//Resizing the Window
window.addEventListener("resize", function(){
	ctx.canvas.width = window.innerWidth * 0.75;
	ctx.canvas.height = window.innerHeight * 0.75;
})

//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)

canvas.addEventListener('mousemove', function(e){
	//console.log(this);
	//console.log(e)
	const x = e.clientX;
	const y = e.clientY;
	if (draws){
		draw(x, y, 5);
		pickedColor();
	}
})

//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	if (e.key == ' '){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		console.log("Canvas is cleared");
	}
	if (e.key == 'ArrowUp'){
		draws = false;
		console.log("Pen up");
	}
	if (e.key == 'ArrowDown'){
		draws = true;
		console.log("Pen down");
	}
})

function pickedColor(){
	document.addEventListener('keydown', function(e){
		//console.log(this);
		//console.log(e);
		if (e.key == 'b'){
			ctx.fillStyle = "rgb(0, 0, 255)";
			console.log("Color is blue");
		}
		if (e.key == 'r'){
			ctx.fillStyle = "rgb(255, 0, 0)";
			console.log("Color is red");
		}
		if (e.key == 'g'){
			ctx.fillStyle = "rgb(0, 255, 0)";
			console.log("Color is green");
		}
		if (e.key == 'y'){
			ctx.fillStyle = "rgb(255, 255, 0)";
			console.log("Color is yellow");
		}
	});
	//Add a listener for the color picker
	colorPicker.addEventListener('change', function(){
		defaultColor = false;
		ctx.fillStyle = colorPicker.value;
		console.log("Color changed");
	})
}

// Functions!
// I would add a function for draw
function draw(x, y, radius) {
	console.log("I am going to draw!!");
	//CHECK OUT beginPath()
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI*2, false);
	if (defaultColor) {
		ctx.fillStyle = "rgb(255, 255, 0)";
	}
	// ensures that the color defaults to red
	ctx.fill();
}
