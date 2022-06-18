import { 
    validarForm, imprimirJson, limpiarHTML
} from "./helpers/funciones.js"

const verJson = document.querySelector('.verJson')
const clearHTML = document.querySelector('.clearHTML')
const formulario = document.getElementById('info-familia')

console.log("Consola...")

formulario.addEventListener('submit', validarForm)

verJson.addEventListener('click', imprimirJson)

clearHTML.addEventListener('click', limpiarHTML)



