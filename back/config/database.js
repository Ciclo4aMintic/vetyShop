const mongoose =require("mongoose")
const connectDatabase = () => {

    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con=>{
      console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con =>{
    console.log(`No se logoro conectar a la BD`)
})
}
//permite llamar la 
module.exports=connectDatabase;

