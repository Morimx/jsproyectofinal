// Funcion para reiniciar a 0 el carrito //
function reiniciaracero() {
    resultadofinal = 0;
    cantCuotas.innerHTML = 0;
    pantalla.innerHTML = resultadofinal;
    carrito = [];
    mostrarCarrito1.innerHTML = `<option selected disabled>Tu carrito se encuentra vacio</option>`;
    return;
}