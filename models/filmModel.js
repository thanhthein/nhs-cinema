var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    filmModel = new Schema({
        film_id: {
            type: Schema.Types.ObjectId,
            default: null
        },
        film_name: {
            type: String,
            default: ""
        },
        category_id: {
            type: String,
            default: ""
        },
        category_name: {
            type: String,
            default: ""
        },
        creater_id: {
            type: String,
            default: ""
        },
        time_open: {
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
        time_create: {
            type: Date,
            default: Date.now
        }
    })

module.exports = mongoose.model('filmModel', filmModel)    
