const mongosee  = require('mongoose');
const Schema    = mongosee.Schema;
const { Cliente } = require('../models/clientes.js');
const { Libro }   = require('../models/libro.js');

const detalle = mongosee.Schema(
  {
      idlibro       : [{ type: Schema.Types.ObjectId, ref: Libro }],
      nombreLibro   : {type:String,required: true},
      valorUnitario : {type:Number,required: true},
      cantidad      : {type:Number,required: true}
  }
);

const clienteVentas = mongosee.Schema(
    {
        cliente     : [{ type: Schema.Types.ObjectId, ref: Cliente }],
        fecha       : {type:Date,required: true},
        total       : {type:Number,required: true},
        detalle     :{
          type      :[detalle],
          required  :false
        }
    }
);
const Venta= mongosee.model('ventas',clienteVentas);
module.exports.Venta=Venta;
