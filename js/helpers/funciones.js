var familias = []
const formulario = document.getElementById('info-familia')

export const validarForm = (e) =>{
    e.preventDefault()
    
    // console.log("Exporté los datos")
    const cargo = document.querySelector('#cargo').value
    const nombre = document.querySelector('.nombre').value
    const apellido = document.querySelector('.apellido').value
    const edad = document.querySelector('.edad').value
    const hobbie = document.querySelector('.hobbie').value

    if([nombre, apellido, edad, hobbie].includes('')){
        mostrarMensaje("Debe llenar todos los campos", true)
    }else{   
        guardarDatos(cargo, nombre, apellido, edad, hobbie)
    }
}

const guardarDatos = (cargo, nombre, apellido, edad, hobbie) =>{
    var familia = {
        "cargo" : cargo,
        "nombre" : nombre,
        "apellido" : apellido,
        "edad" : edad,
        "hobbie" : hobbie
    }
    formulario.reset()

    familias.push(familia)//agrega la informacion al Arreglo
    console.log("JSON: "+JSON.stringify(familias))//convertirlo a JSON
    listarDOM(familias)//mostrar en el Fomulario
    console.table(familia)
}

const listarDOM = (familias) => {
    // console.log(familias)
    limpiarHTML() //limpia el HTML para no repetir informacion
    for(let i = 0; i < familias.length; i++){
        const listadoFamilia = document.querySelector('#listado-familia');
        if(listadoFamilia){
           listadoFamilia.innerHTML += `
                <div id="Personas">
                    <p class="cargo"> Cargo Familiar: ${familias[i].cargo} </p>
                    <p class="nombres"> Nombre(s): ${familias[i].nombre} </p>
                    <p class="apellidos"> Apellido(s): ${familias[i].apellido}</p>
                    <p class="edad"> Edad: ${familias[i].edad}</p>
                    <p class="hobbie"> Hobbies: ${familias[i].hobbie}</p>  
                </div>
            ` 
        }
    }
    
}

const mostrarMensaje = (menj, error) => {
    if(error){
        const p = document.createElement("p")
        p.textContent = menj
        formulario.appendChild(p)
        p.setAttribute('class','error')
        setTimeout(()=>{
            p.remove()
        },1500)
    }
}

const limpiarHTML = () => {
    const listadoFamilia = document.querySelector('#listado-familia');
    if(listadoFamilia){
        while(listadoFamilia.firstChild){
            listadoFamilia.removeChild(listadoFamilia.firstChild);
        };
    };
}