require("dotenv").config();
const dbConnection = require("./config/mongoconfig");
const Server = require("./models/server");


const server = new Server()

server.listen()


