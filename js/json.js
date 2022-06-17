import { imprimirJson } from "./helpers/funciones.js";

const listado = document.querySelector('#listado-json')

window.addEventListener("DOMContentLoaded", () =>{
    let p = imprimirJson()
    console.log(p)
    listado.textContent = p
})