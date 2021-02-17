const { Venta }   = require('../models/venta.js');
const { Cliente } = require('../models/clientes.js');

const createVenta= async(req,res)=>{
    const NewVenta = new Venta({
        detalle : {
          idlibro       : req.body.idlibro,
          nombreLibro   : req.body.nombreLibro,
          valorUnitario : req.body.valorUnitario,
          cantidad      : req.body.cantidad,
        },
        fecha         : req.body.fecha,
        total         : req.body.valorUnitario * req.body.cantidad,
        cliente       : req.body.idcliente

    })
    const resultado = await NewVenta.save()
    res.status(201).send(resultado);
}

const findVentas  = async(req, res)=>{
    const ventas  = await Venta.find().populate('cliente');
    res.send(ventas);
}

const findOneVenta = async(req,res)=>{
    const ventas = await Venta.find({_id:req.params.id}).populate('cliente');
    res.send(ventas);
}

module.exports= { createVenta,findVentas, findOneVenta }
