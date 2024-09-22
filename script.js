

const menu = document.querySelector('#menu-icon') // Acá estamos seleccionando con el querySelección por ID
const navList = document.querySelector('.navlist') // Acá estamos seleccionando con el querySelección por Clase

menu.onclick = () => { //Para que escuche el evento.
    menu.classList.toggle('bx-x') //Creamos clases para dales estilo en el style
    navList.classList.toggle('open') //Creamos clases para dales estilo en el style
    

}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay: 200, origin: 'top'})
sr.reveal('.hero-img', {delay: 450, origin: 'top'})
sr.reveal('.icons', {delay: 500, origin: 'left'})
sr.reveal('.scroll-down', {delay: 450, origin: 'right'})