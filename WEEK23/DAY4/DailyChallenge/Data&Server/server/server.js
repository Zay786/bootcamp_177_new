const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// GET route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello From Express" });
});

// POST route
app.post("/api/world", (req, res) => {
  const { inputValue } = req.body;
  console.log("Received from client:", inputValue);
  res.json({
    message: `I received your POST request. This is what you sent me: ${inputValue}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
