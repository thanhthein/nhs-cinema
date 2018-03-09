module.exports = (() => {
    var func = require('./function').function,
        mongoose = require('mongoose'),
        filmModel = mongoose.model('filmModel'),
        filmRoute = {}

    filmRoute.createFilm = (req, res) => {
      
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