const mongoose = require("mongoose");


const aboutModelSchema = mongoose.Schema({
    
        text:{
            en:{
                type:String
            },
            am:{
                type:String
             },
            ru:{
                type:String
           }   
        }
 })
 
 
 
 
 const about= mongoose.model("about",aboutModelSchema);
 module.exports = {
    "about":about
};