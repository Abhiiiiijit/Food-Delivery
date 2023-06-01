const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Abhijit:Abhijit2001@cluster0.oqq2kn1.mongodb.net/bringmemeal?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
    if (err) {
      console.log("-----", err);
    } else {
      console.log("Connected to MongoDB");
    }
  });
};
module.exports = mongoDB;
