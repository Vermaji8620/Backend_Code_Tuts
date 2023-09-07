const express = require("express");
const app = express();

// load the port from the config file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// middleware ka need parega post request se data mangwane k liye
// parser chchiye
app.use(express.json());

// import routes for todo API
const todoRoutes = require("./routes/todos");

// ab jo route me jo ('/' slash) hota hai...uske pehle aur https: k baaad bhot kch likha hota hai..to wo jo likhna hai usko mounting kehte hai
// to mounting kro yaha pe
app.use("/api/v1/", todoRoutes);

// start server
app.listen(PORT, () => {
  console.log("server has started successfully at ", PORT);
});

// connect the database now
const dbConnect = require("./config/database");
dbConnect();

//  ab default route v likhna hoga
app.get("/", (req, res) => {
  res.send(`<h1>This is the home page</h1>`);
});
