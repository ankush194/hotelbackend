const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    userName : {
        type : String,
        require : true 
    },
    password : {
        type : String ,
        require : true 
    }
},{
    timestamps : true 
})

const adminModel = mongoose.model("admin",adminSchema);

module.exports = adminModel ;