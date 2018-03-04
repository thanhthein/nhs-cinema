module.exports = (app) => {
    let adminController = require('../controllers/adminController'),
        config = require('../config/config').CONFIG_API

    // Route get, post, put...
    app.route('/' + config.__link_admin)
        .post(adminController.adminPanel)
}