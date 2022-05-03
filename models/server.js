const express = require("express");
const cors = require('cors')
class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT | 3001;

    //middelwares
    this.middlewares();

    //rutas de mi app
    this.routes();
  }

  middlewares() {
     //CORS
     this.app.use(cors())

     //Lectura y Parseo  del boy
     this.app.use(express.json())
    
    //pagina estatica
    this.app.use(express.static("public"));
 
  }


  routes() {
      
   //* Path de usuarios 
   this.app.use('/api/user',require('../routes/users.routes'))
  }


  listen() {
    this.app.listen(this.port, () =>
      console.log(
        `El servidor se esta ejecutando en el puerto http://localhost:${this.port}`
      )
    );
  }

}

module.exports = Server;
