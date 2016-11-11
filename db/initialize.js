const schemas = require('./models/index.js');
const mongoose = require('mongoose');
const initialData = require('./seed.js');

require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.once('open', function(){
	console.log("Cleared database!")
	db.dropDatabase(function(){
		for (let key in initialData) {
			const model = db.model(key, schemas[key]);
			for (let data of initialData[key]) {
				model.create({...data})
					.then((record)=>console.log(`Saved ${record}`))
					.catch((err)=>console.log(err));
			} 
		}
	});
});
