//requires
const fs = require("fs");
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`uno de los valores ingresados no es un numero`)
            return
        }

        console.log(`===========================`.green);
        console.log(`tabla de ${base}`.green);
        console.log(`===========================`.green);


        let data = ""
        for (let i = 1; i <= (limite); i++) {
            data += (`${i} * ${base} = ${i*base}\n`);
        }
        console.log(data);
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`uno de los valores ingresados no es un numero`)
            return
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} = ${i*base}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`.red)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}