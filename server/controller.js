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
	}
}