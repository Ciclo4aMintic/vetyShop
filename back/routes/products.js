const express=require("express");
const router=express.Router();
const {getProducts, newProduct}=require("../controllers/productsController")//traemos las respuesta del controlador

router.route('/productos').get(getProducts)//establecemos desde que ruta qqueremos ver el getproducts
router.route('/producto/nuevo').post(newProduct);


module.exports=router;