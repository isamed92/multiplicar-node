/*al inicio se acostumbra poner todos los requires, hay
3 tipos de requires:
    const fs = require('fs');
    const fs = require('express');
    const fs = require('./fs') son archivos que
nosotros mismos escribimos
*/

const argv = require('./config/yargs.js').argv;
const colors = require('colors');




const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
let comando = argv._[0];
switch (comando) {
  case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
        crearArchivo(argv.base, argv.limite)
              .then( archivo =>
                console.log(`Archivo creado: ${archivo}`))
              .catch(err => console.log(err));
    break;
  default:
    console.log('Comando no reconocido');

}

// console.log(process.argv); //argv es el PATHT del archivo app.js

let argv2 = process.argv;

// console.log(argv.base);
// console.log(`el Limite es ${argv.limite}`);


// let parametro = argv[2];
// let base = parametro.split('=')[1];
