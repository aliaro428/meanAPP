var restfull = require('node-restful');
module.exports = function (app, route) {
    var rest = restful.mode(
        'movie', 
        app.models.movie
        ).methods(['get', 'push', 'put', 'delete']);
rest.register(app,route);
return function(req ,res ,next){
    next();
}
};