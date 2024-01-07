const calculateButton = document.querySelector('button')
const result = document.querySelector("#results")
result.style.fontFamily = 'monospace'

function calculateBMI() {
    const heightElement = document.querySelector("#height")
    const weightElement = document.querySelector("#weight")
    let height = Number(heightElement.value) / 100
    let weight = Number(weightElement.value)

    heightElement.value = ""
    weightElement.value = ""

    let bmi = (weight / (height ** 2)).toFixed(2)
    result.textContent = `BMI = ${bmi}`
}

calculateButton.addEventListener('click', calculateBMI)