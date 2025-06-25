const mongoose = require('mongoose');
const notesSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    }
});

const Notes = mongoose.model('Notes', notesSchema);
module.exports = Notes;