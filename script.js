function createSquareDiv(size){
    const square = document.createElement("div");
    square.style.minHeight = size + 'px';
    square.style.minWidth = size + 'px';
    square.style.borderColor = "black";
    square.style.borderStyle = "solid";
    return square;
}

function createGrid(container, numSquares){
    // Check if the height or width of container is smaller
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    console.log("container height", height);
    console.log("container width", width);
    let size = height < width ? height / numSquares : width / numSquares;
    console.log(size);
    for(i = 0; i < numSquares; i++){
        container.appendChild(createSquareDiv(200));
    }
}

const cont = document.querySelector("#container");
createGrid(cont, 16);