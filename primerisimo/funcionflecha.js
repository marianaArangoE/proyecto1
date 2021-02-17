// forma numero 1 de una función 
function promedio1 ( nota_uno,nota_dos,nota_tres){
    let resultado = (nota_uno + nota_dos + nota_tres)/3
    console.log("el resultado es:" + resultado)
}
// forma numero dos de una función
let promedio2 = (nota_uno, nota_dos, nota_tres)=> {
    /* noon bloxking: es para suscitar el tiempo de respuesta*/ setTimeout(function(){
    let resultado= (nota_uno, nota_tres,nota_dos)/3
    console.log("el promedio es: " + resultado)
},2000)
}

promedio1 (3, 4, 1)
promedio2 (4,5,2)

