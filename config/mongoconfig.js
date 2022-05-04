const mongoose = require("mongoose");

const dbConnection = async () => {
  const DB_URI = process.env.MONGO_DB;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => ( !err ?  console.log("db conectada") :  console.log("no conectada"))
  );
};

module.exports = dbConnection;
