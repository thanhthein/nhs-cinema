module.exports = (app) => {
    let uploadController = require('../controllers/uploadController'),
        config = require('../config/config').CONFIG_API,
        fileUpload = require('express-fileupload');

    app.use(fileUpload());

    // Route get, post, put...
    app.route('/upload')
        .get(uploadController.uploads)
        .post(uploadController.uploadImage)
}