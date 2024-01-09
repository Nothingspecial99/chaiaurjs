const showKey = document.querySelector("#showKey")


document.body.addEventListener("keydown", (event) => { showKey.textContent = event.key })