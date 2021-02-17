const mongosee = require('mongoose');

const libroShema = mongosee.Schema(
    {
        caratula        :{type:String,required: true},
        nombre          :{type:String,required: true},
        descripcion     :{type:String,required: true},
        valorUnitario   :{type:Number,required: true},
        categoria       :{type:String,required: true}
    }
);
const Libros= mongosee.model('libros',libroShema);

module.exports.Libros=Libros;
