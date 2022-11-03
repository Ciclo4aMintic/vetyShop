const producto=require("../models/productos")

//ver la lista de productos - metodo
exports.getProducts=async (req, res, next) =>{
    const productos= await producto.find();
        res.status(200).json({
        success: true,
        cantidad: productos.length,
        productos
    
  })
}

//Ver un producto por ID
exports.getProductsById= async (req,res,next) =>{
    const product =await producto.findById(req.parametros.body.id)
    if(!product){
        return res.status(404).json ({
            success:false,
            message:"No encontramos ese producto"
        })
            
    }
    res.status(200).json({
        success: true,
        message:"Aqui encontraras informacion sobre el producto",
        product
    })

}
//Update de un producto
exports.updateProduct= async(req,res,next) =>{
    let product =await producto.findById(req.parametros.id)//Let variable de tipo modificable
    if(!product){//verifica que el objeto no existe
        return res.status(404).json ({
            success:false,
            message:"No encontramos ese producto"
        })
    }//si el objeto existe verificar actualizacion
    product=await producto.findByIdAndUpdate(req.parametros.id,req.body,{
        new:true,
        runValidators:true


    })//responde OK si el prodcuto si se actualizo
    res.status(200).json({
        success:true,
        message:"Prodcuto actualizado correctamente",
        product
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