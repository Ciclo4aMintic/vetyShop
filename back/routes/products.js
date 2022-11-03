const express=require("express");
const router=express.Router();
const {getProducts, newProduct, getProductsById, updateProduct}=require("../controllers/productsController")//traemos las respuesta del controlador

router.route('/productos').get(getProducts)//establecemos desde que ruta qqueremos ver el getproducts
router.route('/producto/nuevo').post(newProduct); //ruta del nuevo producto
router.route('/producto/:id').get(getProductsById); //ruta consultar producto por id
router.route('/producto/:id').put(updateProduct);//creacion de la ruta de actualizacion

module.exports=router;
