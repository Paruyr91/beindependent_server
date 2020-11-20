const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    eventHost:{ type: Boolean, default:false},
    socialMedia:{ type: Boolean, default:false},
    myNetwork:{ type: Boolean, default:false},
    firstName:{ type: String, required: true },
    lastName:{ type: String, required: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    mobailePhone:{ type: Number, required: true },
    sendEmailUpdates:{ type: Boolean, default:false},
    sendMessages:{ type: Boolean, default:false},
    phone:Number,
    callTime:String,
    Address:String,
    availableTime:String,
    Comments:String,
    publish:{ type: Boolean, default:false},

});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);

