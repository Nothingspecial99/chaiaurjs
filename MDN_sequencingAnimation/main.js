const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//// CALLBACK HELL METHOD (Mine)

// setTimeout(() => {
//     alice1.animate(aliceTumbling, aliceTiming)
//     setTimeout(() => {
//         alice2.animate(aliceTumbling, aliceTiming)
//         setTimeout(() => {
//             alice3.animate(aliceTumbling, aliceTiming)
//         }, 2000)
//     }, 2000)
// }, 0)


//// CALLBACK HELL METHOD AFTER LOOKING AT SOLUTION

// alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
//     alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
//         alice3.animate(aliceTumbling, aliceTiming).finished
//     })
// })


//// PROMISE CHANING METHOD

// alice1.animate(aliceTumbling, aliceTiming).finished
//     .then(() => return alice2.animate(aliceTumbling, aliceTiming).finished
//     )
//     .then(() => {
//         alice3.animate(aliceTumbling, aliceTiming)
//     })


//// ASYNC/AWAIT METHOD

// async function wrapper() {
//     await alice1.animate(aliceTumbling, aliceTiming).finished
//     await alice2.animate(aliceTumbling, aliceTiming).finished
//     await alice3.animate(aliceTumbling, aliceTiming).finished
// }

// wrapper()

