/*function registro() {
    const usuarios = {};
    usuarios.nombre = prompt("Ingrese Nombre");
    usuarios.email = prompt("Ingrese su Mail");
    registrar(usuarios);
};

function registrar(nuevoUsuario) {
    if (nuevoUsuario.nombre == "" || nuevoUsuario.email == "") {
        return alert("Faltan Datos, por favor presione 'Comenzar'");
    }
    registrados.push(nuevoUsuario);
    alert("La password sera enviada por correo electronico")
}; */

// Constructor para registro de usuarios //
class Usuarioreg {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    };
};


//Funcion de registro //
function registrodeusuarios() {
    let mail = document.querySelector('.mail').value;
    let passwd = document.querySelector('.passwd').value;

    submit(mail, passwd)
}

// Funcion para submit de usuario y push al array//
function submit(mail, passwd) {
    if (!existeMail(mail)) {
        localStorage.setItem(mail, passwd);
        localStorage.setItem("Useron", "yes");
        login(mail, passwd);
        return;
    } else {
        alert("El correo ya esta registrado")
    }

}

// Validacion de existencia de correo//
function existeMail(mail) {
    return localStorage.getItem(mail)
}