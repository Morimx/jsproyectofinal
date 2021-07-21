let tecnicos = [{
    nivel: "Nivel 1",
    precio: "1000$",
    cantidad: 1,
}, {
    nivel: "Nivel 2",
    precio: 2500,
    cantidad: 1,
}, {
    nivel: "Nivel 3",
    precio: 4500,
    cantidad: 1,
}, ]


let acomodador = document.querySelector('#Tabla')


function acomodar() {
    tecnicos.forEach(x => {
        acomodador.innerHTML = acomodador.innerHTML + `<tr>
       <th scope="row">${x.nivel}</th>
       <td id="n1">${x.precio}</td>
       <td><select>
           <option></option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
       </select></td>
       <td></td>
       </tr>`
    })
}

acomodar();