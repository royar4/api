const mongosee = require('mongoose');

const clienteShema = mongosee.Schema(
    {
        nombre      : { type :String ,required: true },
        direccion   : { type :String ,required: true},
        celular     : { type :Number ,required: true},
        correo      : { type :String ,required: true},
        contrasenia : { type :String ,required: true}
    }
);
const Cliente= mongosee.model('cliente',clienteShema);

module.exports.Cliente=Cliente;
