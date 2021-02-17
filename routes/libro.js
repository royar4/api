const express = require('express');
const router = express.Router();
//action para crear un libro y obtener todos los libros
const {createLibros,findLibros,findOneLibros}=require('../actions/libros.js');
//action para crear un cliente

//rutas get
router.get('/', findLibros);
//post
router.post('/', createLibros );
//obtenemos uno en particular
router.get('/:id', findOneLibros );
module.exports = router;
