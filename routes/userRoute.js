module.exports = (app) => {
    let userController = require('../controllers/userController'),
        config = require('../config/config').CONFIG_API

    // Route get, post, put...
    app.route('/' + config.__link_user)
        .post(userController.createUser)
}