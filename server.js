
const express = require('express');
const path = require('path');

const app = express();


app.get('/app/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(express.static(__dirname)); // set static files location, in this case the route, add a file name if not
app.listen(process.env.PORT || 3000);