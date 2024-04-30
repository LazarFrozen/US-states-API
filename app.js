const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
require("dotenv/config");

mongoose.set("strictQuery", false);

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect to DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/posts",
  { useNewUrlParser: true },
  () => console.log("connected to DB")
);

//Listening to server
app.listen(PORT);
