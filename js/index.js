import { 
    validarForm 
} from "./helpers/funciones.js"
const formulario = document.getElementById('info-familia')
console.log("Consola...")

formulario.addEventListener('submit', validarForm)



