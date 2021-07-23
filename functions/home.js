//Funcion para swicheo de botons Login / Registrar / Logout
function hidebuttons() {

    if (localStorage.getItem("Useron") === "yes") {
        $('#lgin').hide()
        $('#rgst').hide()
        $('#lgout').show()
    } else {
        $('#lgin').show()
        $('#rgst').show()
        $('#lgout').hide()
    }
}

hidebuttons()

// JQuery animacion
$('#SdCarrito').click(() => {

    $('.carrito').slideToggle()
})