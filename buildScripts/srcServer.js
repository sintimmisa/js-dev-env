const express = require('express');
const path = require('path');
const open = require('open');

//set PORT
const PORT = 7000;
// Create an Instance of express and set to app
const app = express();

//tell express which routes to handle

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});




app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + PORT);
    }
});
