
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'app/'}),
);

app.listen(process.env.PORT || 3000);