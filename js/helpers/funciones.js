var familias = []
var imagenes=new Array()
imagenes[0]="src/papa.jpg"
imagenes[1]="src/mama.jpg"
imagenes[2]="src/niña.jpg"
imagenes[3]="src/niño.jpg"

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
        var img = imprimirImg(cargo);   
        guardarDatos(img, cargo, nombre, apellido, edad, hobbie)  
    }
}

const guardarDatos = (img, cargo, nombre, apellido, edad, hobbie) =>{
    var familia = {
        "foto" : img,
        "cargo" : cargo,
        "nombre" : nombre,
        "apellido" : apellido,
        "edad" : edad,
        "hobbie" : hobbie
    }
    formulario.reset()    
    
    familias.push(familia)
    
    console.table(familias)

    listarDOM(familias)
    console.table(familia)
}

export const imprimirJson = () => {
   
    const listado = document.querySelector('#listado-json')
    const listaJson = "JSON: "+JSON.stringify(familias)//convertirlo a JSON
    const p = document.createElement('p')
    p.textContent = listaJson
    listado.appendChild(p)
}

const listarDOM = (familias) => {
    // console.log(familias)
    limpiarHTML() //limpia el HTML para no repetir informacion
    for(let i = 0; i < familias.length; i++){
        const listadoFamilia = document.querySelector('#listado-familia');
        if(listadoFamilia){
           listadoFamilia.innerHTML += `
                <div id="Personas">
                    <div id="imagenFoto"><img id="foto" src="${familias[i].foto}"></div>
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

export const limpiarHTML = () => {

    formulario.reset()
    const listadoFamilia = document.querySelector('#listado-familia');
    if(listadoFamilia){
        while(listadoFamilia.firstChild){
            listadoFamilia.removeChild(listadoFamilia.firstChild);
        };
    };
    const listadoJson = document.querySelector('#listado-json');
    if(listadoJson){
        while(listadoJson.firstChild){
            listadoJson.removeChild(listadoJson.firstChild);
        };
    };
}

const imprimirImg = (cargo) => {
    if(cargo == 'Papá'){
        let foto = imagenes[0];
        return foto;
    }
    if(cargo == 'Mamá'){
        let foto = imagenes[1];
        return foto
    }
    if(cargo == 'Hija'){
        let foto = imagenes[2];
        return foto
    }
    if(cargo == 'Hijo'){
        let foto = imagenes[3];
        return foto
    }
}

// const llamarJSON = async () => {
//     try{
//         const familia = await fetch('familias.json')
//         const listaFamilia = await familia.json()

//         console.log(listaFamilia.familias)
//     }catch (error){
//         console.log(error)
//     }
// }
// console.log(llamarJSON())