//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`.red);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor ${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }


        fs.writeFile(`tablas/tablas-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green);

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}