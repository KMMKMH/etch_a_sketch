const CONTAINER_W_MARGIN = 24;
const CONTAINER_H_MARGIN = 75;

function resizeContainer(container, target) {
    let squareDimentions = Math.min(target.innerHeight - CONTAINER_H_MARGIN, target.innerWidth - CONTAINER_W_MARGIN);
    container.style = `height: ${squareDimentions}px; width: ${squareDimentions}px`;
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
                pixel.style.background = "black";
            });

            flexBox.appendChild(pixel);
        }

        container.appendChild(flexBox);
    }
}

const container = document.querySelector("#container");
const newSketchBtn = document.querySelector("#newSketch");

resizeContainer(container, window);
window.onresize = (event) => {
    resizeContainer(container, event.target);
}

setup(16, 16)