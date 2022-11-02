const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"por favor regisrar el nombre"],
        trim:true,
        maxLength:[120,"El nombre del producto no debe excederlos 120 caracteres"]
    },
    precio:{
        type:Number,
        required:[true,"Por favor registre el precio del producto."],
        maxLength:[8,"El precio del producto no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    descripcion:{
        type:String,
        required:[true,"Por favor registre una descripcion para el productor"],

    },
    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
          public_id:{
            type:String,
            required:true
            
          },
          url:{
            type:String,
            required:true
          } 
        }

    ],
    categoria:{
        type:String,
        required:[true,"Por favor seleccione una categoria"],
        enum:{
            values:[
                "Alimento seco",
                "Alimento humedo",
                "Accesorios",
                "Cuidado e HIgiene",
                "Medicamentos",
                "Snacks",
                "Juguetes"

            ]
                
            
        }
    },
    vendedor:{
        type:String,
        required:[true,"Por favor registre el vendedor"]
    },
    inventario:{
        type:Number,
        required:[true, "Por favor"],
        maxLength:[5,"cantidad maxima"],
        default:0

    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now

    }
        
})
module.exports=mongoose.model["productos",productosSchema]
