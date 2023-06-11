const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Abhijit:Abhijit2001@cluster0.oqq2kn1.mongodb.net/bringmemeal?retryWrites=true&w=majority";
// OR
// mongodb://Abhijit:Abhijit2001@ac-wygfjzl-shard-00-00.oqq2kn1.mongodb.net:27017,ac-wygfjzl-shard-00-01.oqq2kn1.mongodb.net:27017,ac-wygfjzl-shard-00-02.oqq2kn1.mongodb.net:27017/bringmemeal?ssl=true&replicaSet=atlas-13onfk-shard-0&authSource=admin&retryWrites=true&w=majority
const mongoDB = async () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    if (err) {
      console.log("-----", err);
    } else {
      console.log("Connected to MongoDB");
      const fetched_data = await mongoose.connection.db.collection("food_item");
      fetched_data.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection(
          "food_category"
        );
        // console.log(foodCategory)
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) {
            console.log(err);
          } else {
            // console.log(data);
            global.food_item = data;
            global.food_Category = catData;
          }
        });

        // if (err) {
        //   console.log(err);
        // }
        // else {
        //   // console.log(data);
        //   global.food_item = data;
        //   // console.log(global.food_item);
        // }
      });
    }
  });
};
module.exports = mongoDB;
