module.exports = (app) => {
    var filmController = require('../controllers/filmController'),
        config = require('../config/config').CONFIG_API,
        func = require('../controllers/function').function

    // Route get, post, put...
    app.route('/' + config.__link_film)
        .post(filmController.createFilm)


    app.route('/film/')
        .get(filmController.getAllFilm)
    // .post(filmController.createFilm)


    app.post('/film', function (req, res) {
        var name = ""
        if (!func.isEmpty(req.body)) {
            console.log("start ... !" + req.files);
            var fileInput = req.files.fileInput;
            name = new Date().getTime() + fileInput.name
            fileInput.mv(__dirname + "/../public/images/" + name, function (err) {
                if (err) {
                    console.log("start create failed !");
                    return res.status(500).send(err);
                }
                else {
                    console.log("start create !");
                    new filmModel({
                        filmName: req.body.filmName,
                        categoryName: req.body.categoryName,
                        year: req.body.filmYear,
                        detail: req.body.filmContent,
                        photo: "/images/" + name
                    }).save((err, data) => {
                        if (err) {
                            res.status(400).json({ code: 400, message: "Create new film failed !" })
                        } else {
                            // res.status(200).json({ code: 200, message: "Create new film successfully !" })
                            res.redirect('/')
                        }
                    })
                }
            });

        } else {
            res.status(200).json({ code: 400, message: "Create new film failed ! Body empty" })
        }
    })

}