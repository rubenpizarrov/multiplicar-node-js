/**
 * Tablas de multiplica
 */

const argv = require('./config/yargs').argv;

/**
 * llama las funciones crearArchivo y listarTabla
 */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        .then(console.log('Terminado'))
        .catch(e=> console.log(e))
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo Creado: ${archivo}`))
        .catch(e => console.log(e))
    break;

    default:
        break;
}





