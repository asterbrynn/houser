require('dotenv').config;
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const massive = require('massive');
const express = require('express');
const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance => {
	app.set("db", dbInstance);
	app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks marching on Rome`));
})