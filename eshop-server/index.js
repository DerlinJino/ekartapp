const express = require("express");
const productCategories = require("./routes/productCategories");
const cors = require("cors");
const app = express();
const products = require("./routes/product");
PORT = 5001;

app.use(cors());
app.use("/productCategories", productCategories);
app.use("/products", products);

const server = app.listen(PORT, () => {
  console.log("App is running on the port-5001");
});
