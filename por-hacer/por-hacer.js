const fs = require('fs');

let listadoporhacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoporhacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new console.error('no se creo');
    });
}

const cargarDB = () =>{
    
    try {
        
        listadoporhacer = require('../db/data.json');
        
    } catch (error) {
        listadoporhacer = [];
    }
    
    
}

const crear = (descripcion) => {


    cargarDB();

    let porhacer = {
        descripcion,
        completado: false
    };

    listadoporhacer.push(porhacer)

    guardarDB();

    return porhacer;
}

let getlistado = () => {
    cargarDB();
    return listadoporhacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();

    let borarlistado = listadoporhacer.filter( tarea => tarea.descripcion !== descripcion)
        // para poner que si es igual al listado que se ponga false
    if(listadoporhacer.length === borarlistado.length) {
        return false;
    } else { // si lo es que se ponga true
        return true;
    }
}

module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}