module.exports = (() => {
    var func = require('./function').function,
        mongoose = require('mongoose'),
        filmModel = mongoose.model('filmModel'),
        filmRoute = {}

    filmRoute.createFilm = (req, res) => {

        console.log("+====>> " +req);
        
        if (!func.isEmpty(req.body)) {

            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
            // let fileInput = req.files.fileInput,
            //     namePhoto = './pictures/' + Date.now

            // // Use the mv() method to place the file somewhere on your server
            // fileInput.mv(namePhoto, function (err) {
            //     if (err)
            //         return res.status(500).send(err);
            //     res.send('File uploaded!');
            // });

            new filmModel({
                filmName: req.body.filmName,
                categoryName: req.body.categoryName,
                year: req.body.year,
                detail: req.body.detail,
                photo: 'http://cachlamdepmoi.com/wp-content/uploads/2017/09/toc-ngang-vai-2018-800x416.jpg',
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