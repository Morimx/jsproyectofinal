function preciocompleto2(articulo) {
    servicios.forEach(x => {
        if (articulo == x.nombre) {
            /*   resultadofinal += x.precio * iva;
               pantalla.innerHTML = resultadofinal;
               carrito.push(x);*/

            console.log(x.precio)
        }
    })

    var carritoitems = '';
    carrito.forEach(c => {
        let citemnombre = c.nombre;
        let citemprecio = c.precio;
        let citemfoto = c.foto;
        carritoitems += `<li> ${citemfoto} ${citemnombre}: ${citemprecio} sin IVA incluido   </li>`
        mostrarCarrito1.innerHTML = carritoitems

    })
}