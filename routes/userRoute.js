module.exports = (app) => {
    let userController = require('../controllers/userController'),
        config = require('../config/config').CONFIG_API

    // Route get, post, put...
    app.route('/' + config.__link_user)
        .get(userController.getUser)
        .post(userController.createUser)
}