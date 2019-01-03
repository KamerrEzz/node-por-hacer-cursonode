//const argv = require('yargs').argv;


const argv = require('./config/yargs').argv;
let porHacer = require('./por-hacer/por-hacer');
const colors = require('colors')


let comando = argv._[0];
switch (comando) {
    case 'crear':
       let tarea = porHacer.crear(argv.descripcion);
       console.log(tarea)
    break;

    case 'listar':
        let listado = porHacer.getlistado();

        for (let tarea of listado ) {
            console.log('====Por Hacer===='.green);
            console.log(tarea.descripcion);
            console.log('estado: ', tarea.completado);
            console.log('==================='.green)
        }
    break;

    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
    break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconcido')
}