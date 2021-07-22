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

//Lista de servicios//
let servicios = [{
        nombre: "Formateo",
        precio: 2000,
        cantidad: 1,
        foto: '<i class="fas fa-compact-disc"></i>',
    }, {
        nombre: "Backup Cloud",
        precio: 5000,
        cantidad: 1,
        foto: '<i class="fas fa-cloud"></i>',
    },
    {
        nombre: "Cotizacion vigilancia",
        precio: 2000,
        cantidad: 1,
        foto: '<i class = "fas fa-video"> </i>',
    },
]