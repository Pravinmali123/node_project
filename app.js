const express = require('express')
const fs = require('fs');
const app = express();

app.get("/", (req, res) => {
  res.render("overview.ejs");
});

app.get("/product", (req, res) => {
  res.render("product.ejs");
});

app.listen(4800, () =>{
   console.log("server: 4800");
   
})