var numSquares = 6;
var colors = generateRandomColors(numSquares);
var spanColor = document.querySelector("#pickedColor");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    spanColor.textContent = pickedColor;
    h1.style.backgroundColor = "mediumaquamarine";
    resetButton.textContent = "New Game";
    messageDisplay.textContent = "";
    for(var i =0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

})

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    resetButton.textContent = "New Game";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    spanColor.textContent = pickedColor;
    h1.style.backgroundColor = "mediumaquamarine";
    messageDisplay.textContent = "";

    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    resetButton.textContent = "New Game";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    spanColor.textContent = pickedColor;
    h1.style.backgroundColor = "mediumaquamarine";
    messageDisplay.textContent = "";

    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

spanColor.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
    //Give each square a color
    squares[i].style.backgroundColor = colors[i];

    //add event listener to each square
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor == pickedColor){
            messageDisplay.textContent = "You Are Correct!"
            change(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

function change(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }

function generateRandomColors(num){
    var array = [];

    for(var i=0; i<num; i++){
        array.push(randomColor());
    }

    return array;
}  

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}