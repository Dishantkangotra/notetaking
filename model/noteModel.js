const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
         type:String,
         required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const MyNotes = mongoose.model("MyNotes",noteSchema);
module.exports = MyNotes;