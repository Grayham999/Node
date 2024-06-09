// combinedTask.js

const fs = require('fs');

// Step 1: Write "Hello Node" to welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" has been created with the content "Hello Node".');

  // Step 2: Read the content of welcome.txt
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Content of welcome.txt:');
    console.log(data);
  });
});
