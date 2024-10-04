const express = require("express");
const path = require("path");
const app = express();

// cau hinh port - config port

const port = process.env.PORT || 8080;

// cau hinh view engine - config view engine
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

//khai bao router - declare router
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
