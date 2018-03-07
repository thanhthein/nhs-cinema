var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    filmModel = new Schema({
        filmName: {
            type: String,
            default: ""
        },
        categoryId: {
            type: String,
            default: ""
        },
        categoryName: {
            type: String,
            default: ""
        },
        createrId: {
            type: String,
            default: ""
        },
        timeOpen: {
            type: String,
            default: ""
        },
        year: {
            type: String,
            default: ""
        },
        detail: {
            type: String,
            default: ""
        },
        photo: {
            type: String,
            default: ""
        },
        timeCreate: {
            type: Date,
            default: Date.now
        }
    })

module.exports = mongoose.model('filmModel', filmModel)    
