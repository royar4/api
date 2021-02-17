const { Libros }= require('../models/libro.js');

/**
 * createLibros creamos un nuevo libro
 * @type json
 */
const createLibros = async(req,res)=>{
      const Newlibros = new Libros({
          caratula        :req.body.caratula,
          nombre          :req.body.nombre,
          descripcion     :req.body.descripcion,
          valorUnitario   :req.body.valorUnitario,
          categoria       :req.body.categoria
      })
      const resultado = await Newlibros.save()
      res.status(201).send(resultado);
}
/**
 * findLibros mostramos todos los libros en la bd
 * @type json
 */
const findLibros = async(req,res)=>{
  const libros = await Libros.find()
  res.send(libros);
}
/**
 * findOneLibros buscamos un libro por el _id
 * @type json
 */
const findOneLibros = async(req,res)=>{
  const libros = await Libros.find({_id:req.params.id})
  res.send(libros);
}
module.exports= { createLibros,findLibros, findOneLibros }
