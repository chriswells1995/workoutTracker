const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// this makes it so when we deploy to heroku we can use our mLab databse, but for development we use our local database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./controllers/apiController"));
app.use(require("./controllers/htmlController"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});