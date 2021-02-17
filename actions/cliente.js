const { Cliente }= require('../models/clientes.js');

/**
 * createCliente creamos un nuevo cliente
 * @type json
 */

const createCliente= async(req,res)=>{
    const NewCliente = new Cliente({
      nombre      : req.body.nombre,
      direccion   : req.body.direccion,
      celular     : req.body.celular,
      correo      : req.body.correo,
      contrasenia : req.body.contrasenia
    })
    const resultado = await NewCliente.save()
    res.status(201).send(resultado);
}
/**
 * findClientes buscamos todos los clientes
 * @type json
 */
const findClientes= async(req, res)=>{
    const clientes = await Cliente.find()
    res.send(clientes);
}
/**
 * findOneCliente busqueda de un libro por su _id
 * @type int
 * @return json
 */
const findOneCliente = async(req,res)=>{
    const clientes = await Cliente.find({_id:req.params.id})
    res.send(clientes);
}

module.exports= { createCliente,findClientes, findOneCliente }
