// alert("connected");

//Create an array of colors
let colors = generateRandomColors(6);
//     [
//     "rgb(255, 0, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 0, 255)",
//     "rgb(0, 255, 255)",
//     "rgb(255, 0, 255)",
//     "rgb(255, 255, 0)"
// ];

let numberOfSquares = 6;

//Select all of the squares by their class
let squares = document.querySelectorAll(".square");

let pickedColor = pickColor();

//Select the h1 to change the color of its background when you are correct
let h1 = document.querySelector("h1");

//Select the part of the h1 that will be updated based on what color is picked that the user has to guess
let colorDisplay = document.getElementById("colorDisplay");

//Select the span with the id of message
let messageDisplay = document.getElementById("message");

//Select the reset button
let resetButton = document.getElementById("reset");

//Select the easy button
let easyButton = document.getElementById("easy");

//Select the hard button
let hardButton = document.getElementById("hard");

//Select the easy and hard button
let modeButtons = document.getElementsByClassName("mode");

//Update what is displayed in the colorDisplay span
colorDisplay.textContent = pickedColor;

for(let i=0; i<squares.length; i++)
{
    //Loop through the squares and assign it a color from the colors array
    squares[i].style.backgroundColor = colors[i];

    //Add click listeners to squares
    squares[i].addEventListener("click", function () {

        //Grab color the square that is clicked
        let clickedColor = this.style.backgroundColor;

        //Compare the clicked color to the pickedColor
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Correct!";

            changeColors(clickedColor);

            resetButton.textContent = "Play Again?";
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

easyButton.addEventListener("click", function () {
    //Add or remove the class selected
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
});

hardButton.addEventListener("click", function () {
    //Add or remove the class selected
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
});

resetButton.addEventListener("click", function () {
    //Generate new colors
    colors = generateRandomColors(numberOfSquares);

    //Pick a new random color from the array
    pickedColor = pickColor();

    //Change colorDisplay to match the picked color
    colorDisplay.textContent = pickedColor;

    //Change the colors of the squares
    for(let i=0; i<squares.length; i++)
    {
        //Loop through the squares and assign it a color from the colors array
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";

    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
});

function changeColors(color){

    //Loop through all squares
    for(let j=0; j < squares.length; j++)
    {
        //Change all square colors to match the picked color
        squares[j].style.backgroundColor = color;
    }

    h1.style.backgroundColor = color;
}

//Function to generate random colors for the array
function generateRandomColors(number) {
    //Make an array
    let arr = [];

    //Add number random colors to array
    for(let i = 0; i<number; i++)
    {
        //get a random color and add it to the array
        arr[i] = randomColor();
    }

    //Return the array
    return arr;
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//Function to randomly choose a color
function pickColor() {
    //Get a random number by using math.random and math.floor will get rid of the numbers after the decimal
    let random = Math.floor(Math.random() * colors.length);

    return colors[random];
}