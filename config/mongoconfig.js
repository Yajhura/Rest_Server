const mongoose = require("mongoose");

const dbConnection = async () => {
  const DB_URI = process.env.MONGO_DB;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("db conectada");
      } else {
        console.log("error de conexion");
      }
    }
  );
};

module.exports = dbConnection;
