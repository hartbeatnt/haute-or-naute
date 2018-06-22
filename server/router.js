const router = require('express').Router();
const path = require('path');

const Shoe = require('./models/shoe');

router.get('/', (req, res) => {
	res.sendFile(path.join(__base + '../public/index.html'));
});

router.post('/shoes', (req, res) => {
	const shoe = new Shoe({
		url: req.body.url,
		gender: req.body.gender,
		category: req.body.category
	});

	shoe.save(err => {
		if (err) return console.log('oh no!');
		console.log('saved');
	})
	res.send()
})

router.get('/shoes', (req, res) => {
	const shoes = Shoe.find({}, (err, shoes) => {
		if (err) res.json(err);
		res.json(shoes);
	})
})

module.exports = router;