(function(){

    const mongoose = require('mongoose');

    const userSchema = mongoose.Schema({
        google: {
            id: String,
            token: String,
            name: String,
            displayName: String
        }
    });

    module.exports = mongoose.model('User', userSchema);

})();