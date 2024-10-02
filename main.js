const carruselInterno = document.querySelector('.carrusel-interno');
const carruselItems = document.querySelectorAll('.carrusel-item');
let indiceActual = 0;
const intervalo = 3000;
let intervaloId;


function actualizarCarrusel() {
    const desplazamiento = -indiceActual * 100;
    carruselInterno.style.transform = `translateX(${desplazamiento}%)`;
}

function avanzarCarrusel() {
    indiceActual = (indiceActual + 1) % carruselItems.length;
    actualizarCarrusel();
}

function pausarCarrusel() {
    clearInterval(intervaloId);
}

function reanudarCarrusel() {
    intervaloId = setInterval(avanzarCarrusel, intervalo);
}

// Inicializar el intervalo
intervaloId = setInterval(avanzarCarrusel, intervalo);

// Agregar el evento mouseover a cada elemento de la imagen
carruselItems.forEach(item => {
    item.addEventListener('mouseover', pausarCarrusel);
    item.addEventListener('mouseout', reanudarCarrusel);
});



