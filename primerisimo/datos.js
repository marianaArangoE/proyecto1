const {estudiante,obtenerpromedio}= require ('./calculos') 
const fs = require('fs')
let {nombre,edad,notas:{ingles,matematicas,programacion}}  = estudiante
console.log("El nombre del estudiante es: " + nombre)
console.log("El promedio total del estudiante es: " + obtenerpromedio(matematicas,ingles,programacion))
console.log("La edad del estudiante es:" + edad)

let crearArchivo = (estudiante) =>{
    texto = "El nombre del estudiante es " + nombre + '\n' + "ha obtenido un promedio de " + obtenerpromedio(matematicas,ingles,programacion)
    fs.writeFile("promedio.txt",texto,(err) => {
        if(err)throw(err);
        console.log("Se ha creado el archivo")
    });
}
crearArchivo(estudiante)