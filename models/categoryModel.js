var MongoClient = require('mongodb').MongoClient,
    mongodb_url = require('../config/config'),
    Schema = MongoClient.Schema,
    categoryModel = new Schema({
        category_id: {
            type: Schema.Types.ObjectId,
            default: null
        },
        category_name: {
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

module.exports = mongoose.model('categoryModel', categoryModel)    
