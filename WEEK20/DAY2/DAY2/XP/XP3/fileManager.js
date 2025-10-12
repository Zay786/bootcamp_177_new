// fileManager.js
const fs = require('fs');
const path = require('path');

// Read content of a file
function readFile(fileName) {
  try {
    const content = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    console.log(`Content of ${fileName}: ${content}`);
    return content;
  } catch (err) {
    console.error(`Error reading file ${fileName}:`, err);
  }
}

// Write content to a file
function writeFile(fileName, content) {
  try {
    fs.writeFileSync(path.join(__dirname, fileName), content, 'utf8');
    console.log(`Successfully wrote to ${fileName}`);
  } catch (err) {
    console.error(`Error writing to file ${fileName}:`, err);
  }
}

// Export functions
module.exports = {
  readFile,
  writeFile
};
