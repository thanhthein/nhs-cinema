module.exports = (() => {
    mongoose = require('mongoose'),
    filmModel = mongoose.model('filmModel'),
    appRoute = {}

    appRoute.home = (req, res) => {

        res.render('listfilm', {
            layout: 'template-layout',
            message: "defaultmess",
            title: 'Dashboard',
        })
    }

    appRoute.upfilm = (req, res) => {
        res.render('upfilm', {
            layout: 'template-layout',
            title: 'Upload new film'
        })
    }

    appRoute.filmDetail = (req, res) => {
        filmModel.find({ _id: req.query.id }, (err, result) => {

            console.log(" = " +res);
            
        //     if (!func.isEmpty(result)) {
                res.render('film-detail', {
                    layout: 'template-layout',
                    title: 'Film detail',
                    // name: result.filmName,
                    // catego: result.categoryName,
                    // detail: result.detail,
                    // photo: result.photo
                })
            // } else {
            //     res.status(404).json({ code: 404, message: 'Film is empty now !' })
            // }
        })
    }

    appRoute.login = (req, res) => {
        res.render('login', {
            layout: 'template-layout',
            title: 'Login'
        })
    }

    appRoute.register = (req, res) => {
        res.render('register', {
            layout: 'template-layout',
            title: 'Register'
        })
    }

    appRoute.auth = (req, res) => {
        res.render('profile', {
            layout: 'template-layout',
            title: 'User profile'
        })
    }

    return appRoute
})()
