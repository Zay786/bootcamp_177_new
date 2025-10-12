// app.js
const { readFile, writeFile } = require('./fileManager.js');

// Read the content of "Hello World.txt"
const content = readFile('Hello World.txt');

// Write to "Bye World.txt"
writeFile('Bye World.txt', 'Writing to the file');
