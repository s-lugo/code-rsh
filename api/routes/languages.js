const router = require('koa-router')();

module.exports = function(db){
    router
        .get('/api/languages', function* (){
            this.body = "testing 1";
        })
        .get('/api/languages/:id', function* (){
            this.body = "testing 2";
        });
    return router;
};