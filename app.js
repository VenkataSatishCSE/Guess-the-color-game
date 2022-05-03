var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");
var h1 = document.querySelector("h1");

init();
function init(){
    colorDisplay.textContent = pickedColor;
    setupSquares();
    setupMode();
    reset();
}

resetButton.addEventListener("click", function(){
    reset();
});

function setupSquares(){
    for(var i=0;i < squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor == pickedColor){
                messageDisplay.textContent = "correct";
                resetButton.textContent = "Play Again";
                changeColors(pickedColors);
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try agian";
            }
        });

    }
}
function setupMode(){
    for(var i=0;i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            for(var i=0;i<modeButtons.length; i++){
                modeButtons[i].classList.remove("selected");
            }
            this.classList.add("selected");
            if(this.textContent ==="Easy"){
                numSquares = 3;
            }
            else{
                numSquares = 6;
            }
            reset();
        });
    }
}
function reset(){
    colors = genRandomColors(numSquares);
    pickedColor = chooseColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#2c8e99";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            colors[i].style.display = "none";
        }
    }
}
function changeColors(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}
function chooseColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genRandomColors(num){
    var arr = [];
    for(var i = 0;i<num;i++){
        arr.push(makeColor());
    }
    return arr;
}
function makeColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", "+ b + ")";
}