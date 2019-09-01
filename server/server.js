const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const api = require('./routes/index');

app.use(bodyParser.json());
app.use('/api', api);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Lisetning on port ${port}...`));