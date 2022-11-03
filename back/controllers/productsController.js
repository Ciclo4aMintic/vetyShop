const producto=require("../models/productos")

//ver la lista de productos - metodo
exports.getProducts=async (req, res, next) =>{
    const productos= await producto.find();
    res.status(200).json({
    success: true,
    cantidad: productos.length,
    productos
    //message:"en esta ruta usted podra ver todos los productos"
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