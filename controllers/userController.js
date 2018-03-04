module.exports = (() => {
    var func = require('./function').function,
        mongoose = require('mongoose'),
        userModel = mongoose.model('userModel'),
        userRoute = {}

    userRoute.createUser = (req, res) => {
        if (!func.isEmpty(req.body)) {
            userModel.find({ category_id: req.body.category_id }, (error, result) => {
                if (result[0] === undefined) {
                    new userModel({
                        user_name: req.body.user_name,
                        detail: req.body.detail,
                        photo: req.body.photo,
                        password: req.body.password,
                        password: hash,
                        is_admin: false,
                        reset_password_token: func.__generate_reset_password_token(),
                        access_token: func.__generate_access_token({
                            user_name: req.body.user_name,
                            detail: req.body.detail,
                            photo: req.body.photo
                        })
                    }).save((err, data) => {
                        if (err) {
                            res.status(400).json({ code: 400, message: "Create new user failed !" })
                        } else {
                            res.status(200).json({ code: 200, message: "Create new user successfully !" })
                        }
                    })
                }
            })
        }
    }

    return userRoute

})()