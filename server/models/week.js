(function(){

    const mongoose = require('mongoose');

    const weekSchema = mongoose.Schema({
        number: Number,
        sunday: Array,
        monday: Array,
        tuesday: Array,
        wednesday: Array,
        thursday: Array,
        friday: Array,
        saturday: Array
    });

    module.exports = mongoose.model('Week', weekSchema, 'weeks');

})();