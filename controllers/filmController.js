module.exports = (() => {
    var func = require('./function').function,
        mongoose = require('mongoose'),
        filmModel = mongoose.model('filmModel'),
        filmRoute = {}

    filmRoute.createFilm = (req, res) => {
        if (!func.isEmpty(req.body)) {
            new filmModel({
                filmName: req.body.filmName,
                categoryName: req.body.categoryName,
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
        } else {
            res.status(200).json({ code: 400, message: "Create new film failed ! Body empty" })
        }
    }

    filmRoute.getAllFilm = (req, res) => {
        filmModel.find({}, (err, result) => {
            if (!func.isEmpty(result)) {
                res.status(200).json({
                    code: 200,
                    films: result
                })
            } else {
                res.status(404).json({ code: 404, message: 'Film is empty now !' })
            }
        })
    }

    return filmRoute

})()