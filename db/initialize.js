import schemas from './models/index.js';

require('dotenv').config();
const mongoose = require('mongoose');
const initialData = require('./seed.json');


mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
const User = db.model('User', schemas.user);
const Language = db.model('Language', schemas.language);
const Achievement = db.model('Achievement', schemas.achievement);

initialData.achievements.forEach((achievement)=>{
    const { name, description, image } = achievement;
    Achievement.create({
        name,
        description,
        image
    })
    .then((language,err)=>{
        if(err)console.log(err);
        console.log("SAVED");
    });
});

initialData.languages.forEach((language)=>{
    const { name, description, courses } = language;
    Language.create({
        name,
        description,
        courses
    })
    .then((language,err)=>{
        if(err)console.log(err);
        console.log("SAVED");
    });
});





