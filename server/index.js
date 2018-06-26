global.__base = __dirname+"/";

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');

const MONGO_URL = "mongodb://127.0.0.1/haute_or_naute";

mongoose.connect(MONGO_URL);
const app = express();

app.use(bodyParser({extended: false}));
app.use('/', router);

app.listen(3000, function () {
	  console.log(`Listening on port 3000!`);
});
