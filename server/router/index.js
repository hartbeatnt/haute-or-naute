const app = require('express')();
const path = require('path');

const api = require("./api");

app.use('/api', api);

app.get('*', async (req, res) => {
	try {
		await res.sendFile(path.join(__base + '../public/index.html'));
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = app;