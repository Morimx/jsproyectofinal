let tecnicos = [{
    nivel: "Nivel 1",
    precio: "1000",
    cantidad: [1, 2, 3, 4, 5],
}, {
    nivel: "Nivel 2",
    precio: 2500,
    cantidad: [1, 2, 3, 4],
}, {
    nivel: "Nivel 3",
    precio: 4500,
    cantidad: [1, 2, 3],
}, ]


let acomodador = document.querySelector('#Tabla')

const crearOpcion = opcion => {
    return `<option value="${opcion}">${opcion}</option>\n`
}

function acomodar() {
    tecnicos.forEach(x => {
        acomodador.innerHTML = acomodador.innerHTML + `<tr>
       <th scope="row">${x.nivel}</th>
       <td id="n1">${x.precio}</td>
       <td><select>
           <option></option>
        ${x.cantidad.map(crearOpcion).join('')}
       </select></td>
       <td></td>
       </tr>`
    })
}

acomodar();