const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3,
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4,
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1,
  },
];

app.get("/", (req, res) => {
  res.status(200).json("Server is running....");
});

app.get("/products", (req, res) => {
  console.log("All products are displayed.....");
  res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
  const productID = parseInt(req.params.id);
  const product = products.find((s) => s.id === productID);

  if (!product) return res.status(404).json({ message: "Student not found" });

  res.status(200).json(product);
});

app.get("/products/category/:categoryName", (req, res) => {
  const { categoryName } = req.params;
  const decodedCategory = decodeURIComponent(categoryName).toLowerCase();

  console.log("Searching for:", decodedCategory);
  console.log("First product category:", decodedCategory);

  const filteredProducts = products.filter(
    (s) => s.category.toLowerCase() === decodedCategory,
  );

  res.status(200).json(filteredProducts);
});

app.post("/products", (req, res) => {
  if (Array.isArray(req.body)) {
    req.body.forEach((item) => {
      products.push(item);
    });

    res.status(201).json({
      message: `${req.body.length} products created successfully`,
      products: req.body,
    });
  } else {
    const newproduct = {
      id: req.body.id,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      stock: req.body.stock,
      rating: req.body.rating,
    };

    products.push(newproduct);

    res.status(201).json({
      message: "Product created",
      product: newproduct,
    });
  }
});

app.put("/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1)
    return res.status(404).json({ message: "Product not found..." });

  products[index] = {
    id: productId,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating,
  };

  res
    .status(200)
    .json({ message: "Product replaced", product: products[index] });
});

app.put("/products/:id/stock", (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) return res.status(404).json({ message: "Product not found" });

  product.stock = req.body.stock;
  res.status(200).json({ message: "Stock updated", product });
});

app.put("/products/:id/price", (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) return res.status(404).json({ message: "Product not found" });

  product.price = req.body.price;
  res.status(200).json({ message: "Price updated", product });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
