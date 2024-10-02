let AbrirBuscador = (event) => {
    const BarradeBusqueda = document.getElementById('Buscador_Abierto');
    if (BarradeBusqueda.style.display === 'none' || BarradeBusqueda.style.display === '') {
        BarradeBusqueda.style.display = 'block';
    } else {
        BarradeBusqueda.style.display = 'none';
    }
}
