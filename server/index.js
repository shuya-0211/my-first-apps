const express = require("express");

const app = express();

app.get("/products", function (req, res) {
  res.json({ success: true });
});

const PORT = process.env.PORT || "3001";

app.listen(PORT, function () {
  console.log("I am running!");
});

//mongodb+srv://test:<password>@cluster0.xvi4ah4.mongodb.net/?retryWrites=true&w=majority
