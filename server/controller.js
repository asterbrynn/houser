module.exports = {
	getHouses(req, res) {
		const db = req.app.get("db");
		db.get_houses().then(response => {
			res.send(response)
		})
	}, 
	create(req, res) {
		const db = req.app.get("db");
		const {name, address, city, state, zip} = req.body;
		db.create_house({name, address, city, state, zip}).then(response => {
			res.status(200).send(response)
		})
	},
	delete(req, res) {
		const db = req.app.get("db");
		const {id} = req.params;
		db.delete_house([id]).then(() => {
			res.sendStatus(200)
		})
	}
}