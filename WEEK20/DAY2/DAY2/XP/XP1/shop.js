// shop.js
const products = require('./products.js');

// Function to find product by name
function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  if (product) {
    console.log(`Product found:`, product);
  } else {
    console.log(`Product "${productName}" not found.`);
  }
}

// Test the function
findProductByName("Laptop");
findProductByName("Shoes");
findProductByName("Coffee Mug");
findProductByName("Smartphone"); // not in the array
