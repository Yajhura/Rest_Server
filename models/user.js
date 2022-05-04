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


const {Schema, model} = require('mongoose')



const userSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
})

userSchema.methods.toJSON = function(){
    const {__v,password,...user } = this.toObject();
    return user
}

module.exports = model('Users',userSchema)
