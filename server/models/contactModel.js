const mongoose = require("mongoose");


const contactModelSchema = mongoose.Schema({
    
   email1:{
       type:String
   },
   email2:{
    type:String
    },
    email3:{
    type:String
    },
   number1:{
       type:Number
   },
   number2:{
    type:Number
},
number3:{
    type:Number
},

   street:{
       type:String
   }
 })
 
 
 
 
 const contact= mongoose.model("contact",contactModelSchema);
 module.exports=contact