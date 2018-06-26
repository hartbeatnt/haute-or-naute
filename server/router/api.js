const router = require('express').Router();

const ShoeController = require(__base + 'controllers/shoe');
const MatchupController = require(__base + 'controllers/matchup');

const { createShoe, getShoes } = new ShoeController();
const {	saveMatchup, getUserMatchupHistory } = new MatchupController();

router.get('/shoes', async (req, res) => {
	try {
		const shoes = await getShoes();
		res.send(shoes);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.post('/shoes', async (req, res) => {
	try {
		const shoe = await createShoe(req.body);
		res.send(shoe);
	} catch(err) {
		res.status(500).send(err);
	}
});

router.post('/matchups', async (req, res) => {
	try {
		const matchup = await saveMatchup(req.body);
		res.send(matchup);
	} catch(err) {
		res.status(500).send(err);
	}
});

router.get('/user/:userId', async (req, res) => {
	try {
		const matchups = await getUserMatchupHistory(req.params);
		res.send(matchups);
	} catch(err) {
		res.status(500).send(err);
	}
});

module.exports = router;