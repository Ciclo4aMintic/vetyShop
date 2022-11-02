const producto=require("../models/productos")

//ver la lista de productos - metodo
exports.getProducts = (req, res, next) =>{
res.status(200).json({
    success: true,
    message:"en esta ruta usted podra ver todos los productos"
  })
}
//crear nuevo product, este se va poder ver /api/productos
exports.newProduct=async(req,res,next) => {
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}