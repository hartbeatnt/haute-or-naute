global.__base = __dirname+"/";

const app = require('express')();
const server = require('http').Server(app);
const router = require('./router');

app.use('/', router);

server.listen(3000, function () {
	  console.log(`Listening on port 3000!`);
});
