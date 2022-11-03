const express=require("express");
const app = express();

app.use(express.json());

//importar rutas

const productos=require("./routes/products")

//establecer ruta navegador
app.use('/api',productos) //sujeta a cambios

module.exports=app;