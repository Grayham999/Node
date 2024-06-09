// createFile.js

const fs = require('fs');

// Write "Hello Node" to welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" has been created with the content "Hello Node".');
});
