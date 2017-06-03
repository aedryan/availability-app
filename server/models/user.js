(function(){

    const mongoose = require('mongoose');

    const userSchema = mongoose.Schema({
        google: {
            id: String,
            token: String,
            fullName: String,
            displayName: String,
            photo: String
        }
    });
    
    module.exports = mongoose.model('User', userSchema, 'users');

})();