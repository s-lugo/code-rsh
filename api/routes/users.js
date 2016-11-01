const router = require('koa-router')();
const userSchema = require('../../db/models/language');

router
    .get('/api/users', function* (){
        
    })
    .get('/api/users/:id', function* (){

    });
    
module.exports = router;
