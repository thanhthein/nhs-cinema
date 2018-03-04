module.exports = (() => {
    var func = require('./function').function,
        mongoose = require('mongoose'),
        categoryModel = mongoose.model('categoryModel'),
        categoryRoute = {}

    categoryRoute.createCategory = (req, res) => {
        if (!func.isEmpty(req.body)) {
            categoryModel.find({ category_id: req.body.category_id }, (error, result) => {
                if (result[0] === undefined) {
                    new categoryModel({
                        category_name: req.body.category_name,
                        detail: req.body.detail,
                        photo: req.body.photo
                    }).save((err, data) => {
                        if (err) {
                            res.status(400).json({ code: 400, message: "Create new category failed !" })
                        } else {
                            res.status(200).json({ code: 200, message: "Create new category successfully !" })
                        }
                    })
                }
            })
        }
    }

})()