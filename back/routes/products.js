const express=require("express");
const router=express.Router();
const {getProducts}=require("../controllers/productsController")//traemos las respuesta del controlador

router.route('/productos').get(getProducts)//establecemos desde que ruta qqueremos ver el getproducts
module.exports=router;