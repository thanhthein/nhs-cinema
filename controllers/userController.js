module.exports = (() => {
    var func = require('./function').function,
        mongoose = require('mongoose'),
        userModel = mongoose.model('userModel'),
        userRoute = {},
        bcrypt = require('bcrypt-nodejs'),

        // Generate password
        __generate_password = (callback, password) => {
            bcrypt.hash(password, null, null, (err, hash) => {
                callback(hash)
            })
        }

    userRoute.createUser = (req, res) => {
        if (!func.isEmpty(req.body)) {
            userModel.find({ email: req.body.emailSignUp }, (error, result) => {
                if (result[0] === undefined) {
                    let __encrypt_password = (hash) => {
                        new userModel({
                            userName: req.body.userName,
                            detail: req.body.detail,
                            photo: req.body.photo,
                            password: hash,
                            isAdmin: false,
                            email: req.body.emailSignUp,
                            reset_password_token: func.__generate_reset_password_token(),
                            accessToken: func.__generate_access_token({
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
                    __generate_password(__encrypt_password, req.body.password)
                } else {
                    res.status(400).json({ code: 400, message: 'Email address already exists' })
                }
            })
        }
    }

    // User Login
    userRoute.loginUser = (req, res) => {
        if (!func.isEmpty(req.body)) {
            userModel.findOne({ email: req.body.email }, (err, data) => {
                if (data == null) { // The email does not exist
                    res.status(404).json({ code: 404, message: 'The email does not exist' })
                } else if (data) {
                    // Check password
                    if (func.__verify_password(req.body.password, data.password)) {
                        res.status(200).json({
                            code: 200,
                            message: "Login successfully !",
                            _id: data._id,
                            email: data.email,
                            userName: data.userName,
                            accessToken: data.accessToken,
                        })

                        req.session.user = data.userName;
                        if (res.userName == "Admin")
                            req.session.admin = true;
                        req.session.email = data.email
                    } else {
                        res.status(400).json({ code: 400, message: 'Wrong password' })
                        return
                    }
                }
            })
        } else {
            res.status(403).json({ code: 403, message: 'The request is understood, but it has been refused or access is not allowed' })
        }
    }

    userRoute.getUser = (req, res) => {
        if (!func.isEmpty(req.id)) {
            userModel.findOne({ _id: req.id }, (err, data) => {
                if (data == null) { // The email does not exist
                    res.status(404).json({ code: 404, message: 'User is not exist' })
                } else if (data) {
                    res.status(200).json({
                        code: 200,
                        userName: data.userName,
                        email: data.email,
                        timeCreate: data.timeCreate
                    })
                } else {
                    res.status(404).json({ code: 403, message: 'User is not found' })
                }
            })
        } else {
            res.status(403).json({ code: 403, message: 'The request is understood, but it has been refused or access is not allowed' })
        }
    }



    // userRoute.getUser = (req, res) => {
    //     if (!func.isEmpty(req.id)) {
    //     }

    // }


    return userRoute

})()