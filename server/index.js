const express = require("express");
const carRoute = require("./routes/car.route");
const userRoute = require("./routes/user.route");
const cors = require('cors')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "../build/build.js"));

app.use("/api/car", carRoute);
app.use("/api/user", userRoute);

app.listen(PORT, function () {
  console.log("listening on port 8000!");
});
