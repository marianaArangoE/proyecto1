let estudiante = {
    nombre: "alejandro",
    edad: 20,
    notas: {
        matematicas: 4,
        ingles: 5,
        programacion: 3
    }
};

let obtenerpromedio = (nota_uno, nota_dos,nota_tres) => (nota_uno + nota_dos + nota_tres)/3;
/*console.log(obtenerpromedio(estudiante.notas.ingles,estudiante.notas.matematicas,estudiante.notas.programacion));*/


module.exports = {
    estudiante,
    obtenerpromedio
};