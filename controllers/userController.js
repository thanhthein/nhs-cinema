module.exports = (() => {
    var func = require('./function').function,
        mongoose = require('mongoose'),
        userModel = mongoose.model('userModel'),
        userRoute = {}

    userRoute.createUser = (req, res) => {
        if (!func.isEmpty(req.body)) {
            new userModel({
                userName: req.body.userName,
                detail: req.body.detail,
                photo: req.body.photo,
                password: req.body.password,
                isAdmin: false,
                email: req.body.emailSignUp,
                reset_password_token: func.__generate_reset_password_token(),
                access_token: func.__generate_access_token({
                    userName: req.body.userName,
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
    }


    userRoute.login = (req, res) => {

    }

    
    userRoute.getUser = (req, res) => {
        console.log("Sdsdsd");
        

    }

    return userRoute

})()