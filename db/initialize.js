import schemas from './models/index.js';

require('dotenv').config();
const mongoose = require('mongoose');
const initialData = require('./seed.json');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
for (let key in initialData) {
	const model = db.model(key, schemas[key]);
	for (let data of initialData[key]) {
		model.create({...data})
			.then((record)=>console.log(`Saved ${record}`))
			.catch((err)=>console.log(err));
	} 
}