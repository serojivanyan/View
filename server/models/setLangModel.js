const mongoose = require("mongoose");


const setLangModelSchema = mongoose.Schema({
    langName : {
        type:String,
    },
   default:{
       type:Boolean,
   }

 
 })
 
 
 
 
 const setLang= mongoose.model("setLang",setLangModelSchema);
 module.exports=setLang