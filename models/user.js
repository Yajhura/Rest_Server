/**
 * //*coleciones
  {
   nombre : '',
   correo : '',
   passworad : '', //TODO: HACER UN HASH ALA CONTRASEÑA
   img : '',
   rol: '', //TODO: ADMINISTRDOR | USUARIO NORMAL
   estado: false,
   google: false,//*autenticacion con google
  }  
 */


const {Schema,model} = require('mongoose')



const userSchema = new Schema({
    nombre: {
        type : String,
        required: [true,'nombre requerido']
    },
    correo:{
        type: String,
        required:  [true,'correo requerido'],
        unique:true
    },
    password:{
        type: String,
        required:  [true,'password requerido'],
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        required: true,
        enum: ['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type: Boolean,
        default : true
    },
    google:{
        type: Boolean,
        default : false
    }
})

module.exports = model('User',userSchema)
