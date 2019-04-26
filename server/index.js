require('dotenv').config();
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller');
const massive = require('massive');
const express = require('express');
const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance => {
	app.set("db", dbInstance);
	app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks marching on Rome`));
})

app.get('/api/houses', ctrl.getHouses);
app.post('/api/house', ctrl.create);
app.delete('/api/house/:id', ctrl.delete);