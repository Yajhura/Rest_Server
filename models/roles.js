

const {Schema,model} = require('mongoose')




const RoleSchema = Schema({
     
    roles : {
        type : String,
        required : [true, 'El rol es obligatorio']
    }

})



module.exports = model('Roles', RoleSchema)