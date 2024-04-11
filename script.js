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
    console.log("container.heigt", container.style.height)
    console.log("container.width", container.style.width)
    let size = container.height < container.width ? container.height / numSquares : container.width / numSquares;
    for(i = 0; i < numSquares; i++){
        container.appendChild(createSquareDiv(100));
    }
}

const cont = document.querySelector("#container");
createGrid(cont, 16);