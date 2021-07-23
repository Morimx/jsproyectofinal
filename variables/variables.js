// Variables //
const iva = 1.21;
let resultadofinal = 0;
const pantalla = document.querySelector('.numero');
const cantCuotas = document.querySelector('.cantCuotas');
const mostrarCarrito1 = document.querySelector('.carrito');
let carrito = [];
let registrados = [];
const loginlogout = document.querySelector('.loginbtn');


// Lista de cuotas //
let cuotas = {
    trescuotas: 3,
    seiscuotas: 6,
    docecuotas: 12,
}