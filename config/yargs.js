
/**
 * Opciones para el Yargs
 */
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
.command('crear', 'Crea archivo txt',opts)
.command('listar', 'Imprime por consola',opts)
.help()                            
.argv;

/***
 * Permite la disponiblidad de funciones o variables en 
 * archivos Javascripts que soliciten un "require" desde fuera de este archivo
 */
module.exports = {
    argv
}