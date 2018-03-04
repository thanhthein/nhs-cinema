var MongoClient = require('mongodb').MongoClient,
    mongodb_url = require('../config/config'),
    Schema = MongoClient.Schema,
    userModel = new Schema({
        user_id: {
            type: Schema.Types.ObjectId,
            default: null
        },
        user_name: {
            type: String,
            default: ""
        },
        password: {
            type: String,
            default: null
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
        },
        access_token: {
            type: String,
            default: null
        },
        is_admin: {
            type: Boolean,
            default: false
        }
    })

module.exports = mongoose.model('userModel', userModel)    
