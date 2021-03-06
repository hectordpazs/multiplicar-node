const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite=10)=>{

        let data = ''
        console.log('=============='.green);
        console.log(`==tabla de ${base}==`.rainbow);
        console.log('=============='.green);

        for (let i = 1; i<=limite; i++){
            data +=`${base}*${i} = ${base*i}\n`;
        }

        console.log(data.rainbow);

}

const crearArchivo = (base, limite=10)=>{

    return new Promise ((resolve, reject)=>{

        if(!Number(base)){
            reject('No es numero jajsajksa');
            return;
        }
        
        let data = ''

        for (let i = 1; i<=limite; i++){
            data +=`${base}*${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}_conLimite${limite}.txt`, data, (err) => {
            if (err) reject (err) 
            else{
                resolve(`tabla-${base}_conLimite${limite}.txt`)
            }
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}


