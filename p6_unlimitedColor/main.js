const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
let id = undefined


function generateRandomColor() {
    const r = Math.floor(Math.random() * (256))
    const g = Math.floor(Math.random() * (256))
    const b = Math.floor(Math.random() * (256))

    return `rgb(${r},${g},${b})`
}

function changeBgColor() {
    document.body.style.backgroundColor = generateRandomColor();
}

function start() {
    id = setInterval(changeBgColor, 1000);
}

function stop() {
    clearInterval(id)
    id = undefined

}


startButton.addEventListener("click", start)
stopButton.addEventListener("click", stop)




