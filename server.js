const express = require("express");
const path = require("path");
const app = express();

// cau hinh port - config port
require("dotenv").config();
const hostName = process.env.HOST || "localhost";
const port = process.env.PORT ;

// cau hinh view engine - config view engine
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

//khai bao router - declare router
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.render("sample.ejs");
});

app.listen(port, hostName, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
