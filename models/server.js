const express = require('express');
const cors = require('cors');
const dbConnection = require("../config/mongoconfig");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT | 3001;

    //connectar mongo
    this.conectarDB();

    //middelwares
    this.middlewares();

    //rutas de mi app
    this.routes();
  }

  //llamar en mongo
  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
      // CORS
      this.app.use( cors() );

      // Lectura y parseo del body
      this.app.use( express.json() );

      // Directorio Público
      this.app.use( express.static('public') );
  }

  routes() {
    //* Path de usuarios
    this.app.use("/api/user", require("../routes/users"));
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
