function createSquareDiv(size){
    const square = document.createElement("div");
    square.style.minHeight = size + 'px';
    square.style.minWidth = size + 'px';
    // square.style.borderColor = "black";
    // square.style.borderStyle = "solid";
    // square.style.cursor="default";
    return square;
}

function createGrid(container, rowSize){
    // Check if the height or width of container is smaller
    container.innerHTML = '';
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

const cont = document.querySelector("#container");
let rowSize = 24;
let mousedown = false;  
cont.addEventListener("mousedown", (e) => {
   mousedown = true;
   draw(e);
});
cont.addEventListener("mouseup", (e) => {
    mousedown = false;
 });
cont.addEventListener("mouseover", (e) => {
    draw(e);
});

function draw(e){
    if(mousedown){
        e.target.style.backgroundColor = "black";
    }
}

const btnReset = document.querySelector("#btnReset");
console.log(btnReset);
btnReset.addEventListener("click", createGrid(cont, rowSize));

createGrid(cont, rowSize);