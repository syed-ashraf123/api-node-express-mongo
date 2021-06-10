const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

//Connection url
const url =
  "mongodb+srv://zano:7275456455@cluster0.b4vba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//Connect to Mongo
mongoose.connect(
  url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to DB");
  }
);

//Routes
const get = require("./routes/get");
const post = require("./routes/post");

//Destination
app.use("/", get);
app.use("/post", post);

app.listen(4000, () => console.log("Up & RUnning on port 4000"));
