class tecnicoconst {
    constructor(tecnico, valor, fecha) {
        this.valor = valor;
        this.tecnico = tecnico;
        this.fecha = fecha;
    };
};


function agregartecnico(tecnicos) {
    const listatecnico = document.getElementById('ldt');
    const elemento = document.createElement('div');
    elemento.innerHTML = `<div class="card text-center mt-5">
                <div class="card-body d-flex justify-content-around">
                    <strong>tecnico: ${tecnicos.tecnico}</strong>
                    <strong>Prioridad: ${tecnicos.prioridad}</strong>
                    <strong>Fecha: ${tecnicos.fecha}</strong>
                </div>
            </div>`;
    listatecnico.appendChild(elemento);

};

function creartecnico() {
    let cValor = document.querySelector('#valor').value;
    let cTecnico = document.querySelector('#tecnico').value;
    let cDate = document.querySelector('#date').value;

    const tecnicos = new tecnicoconst(cTecnico, cValor, cDate);

    agregartecnico(tecnicos);
}