const mongoose = require("mongoose");

const ConnectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect("mongodb://127.0.0.1:27017/Shop");
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = ConnectDb
