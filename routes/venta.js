const express = require('express');
const router = express.Router();
//action para crear un libro y obtener todos los libros
const {createVenta,findVentas,findOneVenta}=require('../actions/ventas.js');
//action para crear un cliente

//rutas get
router.get('/', findVentas);
//post
router.post('/', createVenta );
//obtenemos uno en particular
router.get('/:id', findOneVenta );
module.exports = router;
