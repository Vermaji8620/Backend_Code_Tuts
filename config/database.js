const mongoose = require("mongoose");

// niche wale line se .env k andar me jitna v kch jo bhi hai...wo sb process object k andar me load ho jayega---
require("dotenv").config();

// now link the application and the database
const dbconnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("cannot connect");
      console.log(err);
      // below one is the kind of an error code ...0 means process completed successfully, and 1 means completed with some error
      process.exit(1);
    });
};
module.exports = dbconnect;
