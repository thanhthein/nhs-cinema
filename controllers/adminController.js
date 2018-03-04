module.exports = (() => {
    var func = require('./function').function,
        mongoose = require('mongoose'),
        filmModel = mongoose.model('filmModel'),
        defaultmess = 'Welcome to dashboard',
        filmRoute = {}

    filmRoute.adminPanel = (req, res) => {
        res.render('admin-panel', {
            layout: 'template-layout',
            message: defaultmess,
            title: 'Dashboard'
        })
    }

})()