const path = require('path');
const fs = require('fs');

fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('folder created...');
});

