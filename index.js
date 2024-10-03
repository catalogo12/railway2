//trabajoFinal-index.js

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:pckblSmGkVEJYHxXXFXqlwVqgZxMZIVG@mongodb.railway.internal:27017/baseDatosJose1');
const express = require("express");
const app=express();
const cors = require("cors");
const path = require("path");

const port= 3000;

const tablaSchema = new mongoose.Schema({
       nombre:String
      });
const rojo = mongoose.model("rojo",tablaSchema);
const bodyParser = require("body-parser");
const router = express.Router();
router.use('/contenido',express.static(',/public'));

//ruta para mostrar formulaario para cargar productos
app.get("/productosRuta", (req, res) =>{
  res.render("formulario");
});

//app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
app.use(cors());
app.use(express.json());
app.set('view engine','pug');
app.use(express.urlencoded({ exended: true }));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.post("/anadirDatos",(req, res) =>{
                                   const productoInfo=req.body;
                                   const nuevoProducto= new rojo({
                                   
				   nombre:productoInfo.nombre,
				   
				   });
        nuevoProducto.save().then((rojo)=>{res.status(200).json(nuevoProducto);
   });
});					


app.listen(port, () =>{console.log(`leyendo el puerto ${port} ---esta trabajando`)});

















