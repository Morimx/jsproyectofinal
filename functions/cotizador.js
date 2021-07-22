let tecnicos = [{
        nivel: "Nivel 1",
        precio: 1000,
        cantidad: [1, 2, 3, 4, 5],
        subtotal: 0,
        clase: "nvl1",
    }, {
        nivel: "Nivel 2",
        precio: 2500,
        cantidad: [1, 2, 3, 4],
        subtotal: 1,
        clase: "nvl2",
    }, {
        nivel: "Nivel 3",
        precio: 4500,
        cantidad: [1, 2, 3],
        subtotal: 2,
        clase: "nvl3",
    },



]



let acomodador = document.querySelector('#Tabla')


const crearOpcion = opcion => { return `<option class="${opcion}">${opcion}</option>\n` }

function acomodar() {
    var y = 0;
    tecnicos.forEach(x => {
        acomodador.innerHTML = acomodador.innerHTML + `<tr>
    <th scope="row">${x.nivel}</th>
    <td id="n1">${x.precio}</td>
    <td>
    <select id="${x.clase}" onchange="myFunction(${y})">
    <option></option>
        ${x.cantidad.map(crearOpcion).join('')}
    </select></td>
    <td class="${x.clase}">
    0
    </td>
    </tr>`
        y++

    })


}

acomodar();


function myFunction(parametro) {
    var subtotal = parametro;
    var change = document.getElementById("nvl1").value;
    var change1 = document.getElementById("nvl2").value;
    var change2 = document.getElementById("nvl3").value;

    if (subtotal == 0) {
        let preTecnico = tecnicos[0].precio
        preTecnico = preTecnico * change;
        document.querySelector('.nvl1').innerHTML = `${preTecnico} por hora`;
    } else if (subtotal == 1) {
        let preTecnico1 = tecnicos[1].precio
        preTecnico1 = preTecnico1 * change1;
        document.querySelector('.nvl2').innerHTML = `${preTecnico1} por hora`
    } else if (subtotal == 2) {
        let preTecnico2 = tecnicos[2].precio
        preTecnico2 = preTecnico2 * change2;
        document.querySelector('.nvl3').innerHTML = `${preTecnico2} por hora`
    }
}