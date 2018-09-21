const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) =>{

  console.log('================'.red);
  console.log(`=tabla de ${base}==`.green);
  console.log('================'.green);
  let data = '';
  for (let i = 0; i < limite; i++) {
    data +=`${base} * ${i+1} = ${base*(i+1)}\n`;
  }
  console.log(data);
}

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) =>{
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un numero`);
      return;

    }

    let data = '';
    for (let i = 0; i < limite; i++) {
      data +=`${base} * ${i+1} = ${base*(i+1)}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-hasta-el-${limite}.txt`, data, (err) => {
      if (err)
        reject(err);
      else
        resolve(`tabla-${base}-${limite}.txt`.green);
    });
  })
}

module.exports = {
  crearArchivo,
  listarTabla
}
