const opciones = {
    matematicas: {
        /* demand me hace obligatoriamente ingresar el dato*/
        demand: true,
        /* default lo pone por defecto
        default: 0,*/
        alias: "m"
    },
    ingles: {
        demand: true,
        /*default:0,*/
        alias: "i"
    },
    programacion: {
        demand: true,
        /*default:0,*/
        alias: "p"
    }
}




const argv = require('yargs')
    .command('promedio', 'calcular el promedio', opciones)
    .argv
console.log(argv.matematicas)
console.log(argv)
console.log("El promedio del estudiante es: " + (argv.m + argv.i + argv.p) / 3)
