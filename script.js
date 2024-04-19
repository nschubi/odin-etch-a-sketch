const STANDARD_GRIDSIZE = 17;
const STANDARD_COLOR = "black";
const STANDARD_MODE = "black"

let rowSize = STANDARD_GRIDSIZE;
let isPressed = false;  

const cont = document.querySelector("#container");
const btnReset = document.querySelector("#btnReset");
const btnSize = document.querySelector("#btnSize"); 

document.body.onmousedown = () => (isPressed=true);
document.body.onmouseup = () => {isPressed=false};

btnReset.addEventListener("click", () => {createGrid(cont,rowSize)});

btnSize.addEventListener('click', () => {
    rowSize = prompt("How many Squares should one line have?");
    createGrid(cont, rowSize);
});

function createSquareDiv(size){
    const square = document.createElement("div");
    square.style.minHeight = size + 'px';
    square.style.minWidth = size + 'px';
    square.style.borderColor = "black";
    square.style.borderStyle = "solid";
    square.addEventListener("mouseover", (e) => {
        draw(e);
    });
    square.addEventListener("mousedown", (e) => {
        console.log("mousedown")
        draw(e);
    });
    return square;
}

function createGrid(container, rowSize){
    container.innerHTML = ' ';
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let numSquares = rowSize * rowSize;
    console.log("container height", height);
    console.log("container width", width);
    let area = width * height;
    let areaTile = area / numSquares;
    let size = Math.sqrt(areaTile);
    console.log(size);
    for(i = 0; i < numSquares; i++){
        container.appendChild(createSquareDiv(size));
    }
}

function draw(e){
    if(e.type === 'mouseover' && !isPressed){
        return;
    }
    e.target.style.backgroundColor = "black";
}

createGrid(cont, rowSize);