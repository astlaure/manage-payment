const express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(3000, () => {
    console.log('server started on port 3000.');
})