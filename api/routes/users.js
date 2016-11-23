const router = require('koa-router')();
const mongoose = require('mongoose');
const userSchema = require('../../db/models/language');
const ObjectId = mongoose.Types.ObjectId;

const User = mongoose.model('User', userSchema);

router
    .get('/api/users', function* (){
        
    })
    .get('/api/users/:id', function* (){

    })
    .get('/api/users/:id/favorites', function*(){
        
    })
    .post('/api/users/:id/favorites', function*(){
        const user = yield User.findByIdAndUpdate(new ObjectId('5835fc637131d447fe709c59'),{name: "sen"},{new:true});
        console.log(user);
        this.response.body = user;
    });
    
module.exports = router;