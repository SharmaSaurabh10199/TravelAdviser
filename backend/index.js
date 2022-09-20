const express = require("express");
const mongoose = require("mongoose");

// get the routes
// const userRoutes = require("./routes/user");
const pinRoutes = require("./routes/pin");
// config the environment variables
const dotenv = require("dotenv");
dotenv.config();

const app = express();
// connect the mongodb

app.use(express.json());

mongoose
  .connect(process.env.Mongo_Url)
  .then(() => {
    console.log("connection made");
  })
  .catch(() => {
    console.log("error");
  });

// make the routes
// app.use("/api/users", userRoutes);
app.use("/api/pins", pinRoutes);

app.listen(8800, () => {
  console.log("listening to port no 880");
});
