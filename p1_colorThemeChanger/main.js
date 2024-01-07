let currentColorScheme = { background: 'white', color: "black" }

function changeColor(e) {
    document.body.style.background = getComputedStyle(e.target).backgroundColor;
    document.body.style.color = getComputedStyle(e.target).color;

    e.target.style.background = currentColorScheme.background;
    e.target.style.color = currentColorScheme.color;

    currentColorScheme.background = document.body.style.background
    currentColorScheme.color = document.body.style.color
}

let buttons = document.querySelectorAll(".button")
console.log(buttons)

buttons.forEach((item) => { item.addEventListener('click', changeColor) })