// read-directory.js
const fs = require('fs');
const path = require('path');

const dirPath = __dirname; // Current directory

try {
  const files = fs.readdirSync(dirPath);
  console.log('Files in directory:');
  files.forEach(file => console.log(file));
} catch (err) {
  console.error('Error reading directory:', err);
}
