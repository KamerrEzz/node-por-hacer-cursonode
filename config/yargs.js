const completado = {
        default: true,
        alias: 'c',
        desc: 'marca como completado'
}

const descripcion ={
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const argv = require('yargs')

    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('actualizar', 'actualia estados por hacer', {
        completado,
        descripcion
    })
    .command('borar', 'borrar tarea', {
        descripcion
    })
    .help()
    .argv;
    
module.exports = {
    argv
}