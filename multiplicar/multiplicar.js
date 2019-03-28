const fs = require('fs'); //interno de NOde para leer y escribir archivos del sistema IO
const colors = require('colors');


let data = '';


/*
**Funciones con promesas
** 
*/
let listarTabla = (base, limite = 10) => {



    return new Promise((resolve, reject)=>{
        if(!Number(base) || !Number(limite)){
            reject(`El valor ingresado: "${base}" no es un número`.green)
            return;
        }
        
        for (let i = 1; i<=limite; i++){
            data += `${base} x ${i} = ${base*i}\n`;
        }

        resolve(console.log(data.green));
    })
    
}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject)=>{
        
        if(!Number(base) || !Number(limite)){
            reject(`El valor ingresado: "${base}" o "${limite}" no es un número`)
            return;
        }
        
        for (let i = 1; i<=limite; i++){
            data += `${base} x ${i} = ${base*i}\n`;
        }
        
        
        fs.writeFile(`tablas/tabla${ base }.txt`, data, (err) => {
            
            if (err) {
                reject (err);
            }
            else{
                resolve (` tabla-${ base }-${limite}.txt`.inverse);
            } 
            
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}



