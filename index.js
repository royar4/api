const mongosee  = require('mongoose');
const express   = require('express');
const app       = express();
const libro     = require('./routes/libro');
const cliente   = require('./routes/clientes');
const venta     = require('./routes/venta');

//vamos a trabajar toda la api en json
app.use(express.json());
//ruta de libros
app.use('/api/libro/', libro);
//ruta de clientes
app.use('/api/clientes/', cliente);
//ruta de ventas con detalles 
app.use('/api/ventas/', venta);

const port= process.env.PORT || 3003
app.listen(port,()=>console.log('Servidor ejecutado en puerto:' + port));

mongosee.connect('mongodb://localhost/bookstore',{useNewUrlParser:true,useFindAndModify:false})
.then(()=>console.log("se conecto con mongo db"))
.catch(()=>console.log("no se conecto a la bd mongo db"))
