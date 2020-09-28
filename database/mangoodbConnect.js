require("dotenv").config();
const mongoose = require("mongoose");

function MangooDBConnect() {
  mongoose.connect(
    `${process.env.MANGOODB_CONNECT}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() =>{
    console.log("Conectado com o Mangoo DB")
  })
  .catch(err => {
    console.log(err);
    return err
  })
};


module.exports = MangooDBConnect;