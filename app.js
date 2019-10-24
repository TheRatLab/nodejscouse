const argv = require('./config/yargs').argv;
const colors = require('colors');

argv.argv

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listando');
        listarTabla(argv.base, argv.limite)
            .then(tablas => console.log(tablas))
            .catch(e => console.log(e));

        break;
    case 'crear':
        console.log('creando archivo');

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : ${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

}

// console.log('limite', argv);
// console.log('limite', argv.base);