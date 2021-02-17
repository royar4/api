const express = require('express');
const router = express.Router();
//action para crear un cliente y obtener todos los clientes
const {createCliente,findClientes,findOneCliente}=require('../actions/cliente.js');
//action para crear un cliente

//rutas get
router.get('/', findClientes);
//post
router.post('/', createCliente );
//obtenemos uno cliente
router.get('/:id', findOneCliente );

module.exports = router;
