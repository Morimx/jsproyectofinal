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