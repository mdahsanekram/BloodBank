const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        role: {
        type: String,
        require: [true, 'role is require'],
        enum: ['admin', 'organisation', 'donar', 'hospital']
    },
    name: {
        type: String,
        require: function () {
            if (this.role === 'user' || this.role === "admin") {
                return true
            }
            return false
        }
    },
    email: {
        type: String,
        require: [true, 'email is require'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'password is require'],
    },
    address: {
        type: String,
        require: [true, 'password is require'],
    },
    phone: {
        type: String,
        require: [true, 'password is require'],
    },
organisationName: {
    type: String,
    require: function () {
        if (this.role === 'organisation') {
            return true
        }
        return false
    }
},
hospitalName: {
    type: String,
    require: function () {
        if (this.role === 'hospital') {
            return true
        }
        return false
    },
}
},{timestamps:true});

// const userModel = mongoose.model('users', userSchema);

// module.exports = userModel;

module.exports= mongoose.model('users',userSchema)