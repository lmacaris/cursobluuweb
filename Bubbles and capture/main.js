// const cajitas = document.querySelectorAll('.border');



// cajitas.forEach((caja) => {
//     caja.addEventListener('click', (e) => {
//         e.stopPropagation();
//         console.log('me diste click')
//     });
// });



// const formulario = document.querySelector('form');

// formulario.addEventListener('submit', e => {
//     console.log('me diste click')
//     e.preventDefault()
// })

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    // console.log(e.target.id)

    if (e.target.id === "padre") {
        console.log('diste click al padre')
    }

    if (e.target.matches('.border-secondary')) {
        console.log('diste click al mijo')
    }

    if (e.target.dataset.div === 'divNieto') {
        console.log('diste click al nieto')
    }
})