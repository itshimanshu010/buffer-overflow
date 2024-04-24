const mongoose = require("mongoose");

const url =
  "mongodb+srv://himanshu:password@cluster0.ffnurx2.mongodb.net/bufferoverflow?retryWrites=true&w=majority&appName=Cluster0";

  module.exports.connect = () => {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
