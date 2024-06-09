// readFile.js

const fs = require('fs');

// Read the content of hello.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
