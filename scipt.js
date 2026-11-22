const CONTAINER_W_MARGIN = 24;
const CONTAINER_H_MARGIN = 75;

function resizeContainer(container, target) {
    let squareDimentions = Math.min(target.innerHeight - CONTAINER_H_MARGIN, target.innerWidth - CONTAINER_W_MARGIN);
    if (container.style.height !== `${squareDimentions}px`) {
        container.style = `height: ${squareDimentions}px; width: ${squareDimentions}px`;
    }
}

function setup(rows, columns) {
    for(let i = 0; i < rows; i++) {
        const flexBox = document.createElement("div");
        flexBox.id = "flexbox";

        for(let j = 0; j < columns; j++) {
            const pixel = document.createElement("div");
            pixel.id = `pixel${i}${j}`;
            pixel.classList = "pixel";
            pixel.addEventListener("mouseenter", () => {
                let randomR = Math.floor(Math.random() * 255);
                let randomG = Math.floor(Math.random() * 255);
                let randomB = Math.floor(Math.random() * 255);
                pixel.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
            });

            flexBox.appendChild(pixel);
        }

        container.appendChild(flexBox);
    }
}

function handleNewSketch() {
    let rows = Number.parseInt(prompt("How many horizontal pixels would you like? MAX: 100px."));
    while(Number.isNaN(rows) || rows > 100 || rows < 1) {
        rows = Number.parseInt(prompt("It should be an integer, MAX of 100px and MIN of 1px for the horizontal please."));
    }

    let columns = Number.parseInt(prompt("How many vertical pixels would you like? MAX: 100px."));
    while(Number.isNaN(columns) || columns > 100 || columns < 1) {
        columns = Number.parseInt(prompt("It should be an integer, MAX of 100px and MIN of 1px for the vertical please."));
    }

    container.textContent = "";
    setup(rows, columns);
}

const container = document.querySelector("#container");
const newSketchBtn = document.querySelector("#newSketch");

resizeContainer(container, window);
window.onresize = (event) => {
    resizeContainer(container, event.target);
}

newSketchBtn.addEventListener("click", handleNewSketch);

setup(16, 16);