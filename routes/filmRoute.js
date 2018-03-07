module.exports = (app) => {
    var filmController = require('../controllers/filmController'),
        config = require('../config/config').CONFIG_API

    // Route get, post, put...
    app.route('/' + config.__link_film)
        .post(filmController.createFilm)


    app.route('/film/')
        .get(filmController.getAllFilm)
        .post(filmController.createFilm)
}