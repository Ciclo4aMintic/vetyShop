exports.getProducts = (req, res, next) =>{
res.status(200).json({
    success: true,
    message:"en esta ruta usted podra ver todos los productos"
})
}