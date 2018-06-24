const router = require('express').Router();
const path = require('path');

const ShoeModel = require('./models/shoe');

router.get('/', async (req, res) => {
	try {
		await res.sendFile(path.join(__base + '../public/index.html'));
	} catch (err) {
		res.send(err);
	}
});

router.post('/shoes', async (req, res) => {
	const { url, gender, category } = req.body;

	const shoe = new ShoeModel({
		url,
		gender,
		category,
	});

	try {
		await shoe.save();
		res.send(shoe);
	} catch(err) {
		res.send(err);
	}
});

router.get('/shoes', async (req, res) => {
	try {
		const shoes = await Shoe.find();
		res.send(shoes);
	} catch (err) {
		res.send(err);
	}
});

module.exports = router;