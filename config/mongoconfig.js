const mongoose = require('mongoose')



const dbConnection = async() => {
    try {
    
       await mongoose.connect(process.env.MONGO_DB, {
           useNewUrlParser: true,
           useUnifiedTopology : true,
        
       })
        console.log('db conectada')
    } catch (error) {
        console.log('error en la hora de levantar la db',error)
    }
}




module.exports = dbConnection;