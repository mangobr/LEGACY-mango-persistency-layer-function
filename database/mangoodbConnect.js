require("dotenv").config();
const mongoose = require("mongoose");

function MangoDBConnect() {
  mongoose.connect(
    `${process.env.MANGODB_CONNECT}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() =>{
    console.log("Conectado com o Mango DB")
  })
  .catch(err => {
    console.log(err);
    return err
  })
};


module.exports = MangoDBConnect;