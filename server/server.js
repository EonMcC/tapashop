const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const mysql = require("mysql");
const createRouter = require("./helpers/create_router.js");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "tapashop",
  password: "password",
});

app.get("/", function (req, res) {
  let q = "SELECT * FROM food";
  connection.query(q, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(8080, function () {
  console.log("App listening on port 8080!");
});
