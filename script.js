const container = document.querySelector(".container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let size = prompt("Enter a width between 0 and 100");
    for(i = 0; i < size; i++){
    const rowItems = document.createElement("div");
    rowItems.classList.add("row");
    container.appendChild(rowItems);
    for(j = 0; j < size; j++){
        const cellItems = document.createElement("div");
        let red = 240;
        let green = 240;
        let blue = 100;
        cellItems.classList.add("cell");
        cellItems.addEventListener("mouseenter", () => {
        cellItems.style.backgroundColor = `rgb(${red-=10}, ${green-=10}, ${blue-=10})`
    })
        rowItems.appendChild(cellItems);
    }
    btn.addEventListener("click", () => {
        rowItems.style.display = "none"
    })
}
})

for(i = 0; i < 16; i++){
    const rowItems = document.createElement("div");
    rowItems.classList.add("row");
    container.appendChild(rowItems);
    for(j = 0; j < 16; j++){
        const cellItems = document.createElement("div");
        let red = 240;
        let green = 240;
        let blue = 100;
        cellItems.classList.add("cell");
        cellItems.addEventListener("mouseenter", () => {
        cellItems.style.backgroundColor = `rgb(${red-=10}, ${green-=10}, ${blue-=10})`
    })
        rowItems.appendChild(cellItems);
    }
    btn.addEventListener("click", () => {
        rowItems.style.display = "none"
    })
}
