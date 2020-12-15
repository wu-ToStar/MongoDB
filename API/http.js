const express = require("express");

const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extende:true}));
app.use(bodyparser.json())

app.get("/", (req, res) => { 
  res.send("hello,postman");
});
const stuController = require(process.cwd() + "/constroller/stu.js");
app.post("/stu", stuController.create);
app.get("/stu", stuController.list);
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
