const router = require('koa-router')();

module.exports = function(db){
    router
        .get('/api/users', function* (){
            
        })
        .get('/api/users/:id', function* (){

        });
    return router;
};