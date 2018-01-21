const express = require('express');
const mezzle = require('./mezzle');

const app = express();

app.get('/', mezzle);

app.listen(8080);
