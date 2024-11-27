const express = require('express');

const app = express();
const PORT = 1247;
app.get('/', (_, res) => res.end('Hello Holberton School!'));
app.listen(PORT);
module.export = app;
