module.exports = (() => {
    var func = require('./function').function,
        mongoose = require('mongoose'),
        filmModel = mongoose.model('filmModel'),
        filmRoute = {}

    filmRoute.createFilm = (req, res) => {
        if (!func.isEmpty(req.body)) {
            filmModel.find({ film_id: req.body.film_id }, (error, result) => {
                if (result[0] === undefined) {
                    new filmModel({
                        film_name: req.body.film_name,
                        category_id: req.body.category_id,
                        category_name: req.body.category_name,
                        creater_id: req.body.creater_id,
                        time_open: req.body.time_open,
                        year: req.body.year,
                        detail: req.body.detail,
                        photo: req.body.photo,
                    }).save((err, data) => {
                        if (err) {
                            res.status(400).json({ code: 400, message: "Create new film failed !" })
                        } else {
                            res.status(200).json({ code: 200, message: "Create new film successfully !" })
                        }
                    })
                }
            })
        }
    }
    
    return filmRoute

})()