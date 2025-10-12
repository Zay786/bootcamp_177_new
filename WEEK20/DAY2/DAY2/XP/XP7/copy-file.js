// copy-file.js
const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'source.txt');
const destPath = path.join(__dirname, 'destination.txt');

try {
  const content = fs.readFileSync(sourcePath, 'utf8'); // Read source
  fs.writeFileSync(destPath, content, 'utf8');        // Write to destination
  console.log('File copied successfully!');
} catch (err) {
  console.error('Error:', err);
}
