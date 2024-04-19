const STANDARD_GRIDSIZE = 17;
const STANDARD_MODE = "black"

let rowSize = STANDARD_GRIDSIZE;
let mode = STANDARD_MODE;
let isPressed = false;  

const cont = document.querySelector("#container");
const btnReset = document.querySelector("#btnReset");
const btnSize = document.querySelector("#btnSize");
const btnMode = document.querySelector("#btnMode");

document.body.onmousedown = () => (isPressed=true);
document.body.onmouseup = () => {isPressed=false};

btnReset.addEventListener("click", () => {createGrid(cont,rowSize)});

btnSize.addEventListener('click', () => {
    rowSize = parseInt(
        prompt("How many Squares should one line have? (max: 100)"));
    if(isNaN(rowSize)){
        rowSize = 16;
    }
    if(rowSize > 100){
        rowSize = 100;
    }
    createGrid(cont, rowSize);
});

btnMode.addEventListener('click', () => {
    if(mode === "black"){
        mode = "rainbow";
    }else{
        mode = "black";
    }
});

function createSquareDiv(size){
    const square = document.createElement("div");
    square.style.minHeight = size + 'px';
    square.style.minWidth = size + 'px';
    square.addEventListener("mouseover", (e) => {
        draw(e);
    });
    square.addEventListener("mousedown", (e) => {
        draw(e);
    });
    return square;
}

function createGrid(container, rowSize){
    container.innerHTML = ' ';
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let numSquares = rowSize * rowSize;
    let area = width * height;
    let areaTile = area / numSquares;
    let size = Math.sqrt(areaTile);
    for(i = 0; i < numSquares; i++){
        container.appendChild(createSquareDiv(size));
    }
}

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}

function draw(e){
    if(e.type === 'mouseover' && !isPressed){
        return;
    }
    if(mode === "rainbow"){
        let randR = Math.floor(Math.random() * 255);
        let randB = Math.floor(Math.random() * 255);
        let randG = Math.floor(Math.random() * 255);
        let color = rgb(randR, randG, randB);
        e.target.style.backgroundColor = color;
    }else{
        e.target.style.backgroundColor = "black";
    }
}

createGrid(cont, rowSize);