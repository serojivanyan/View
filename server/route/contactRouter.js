const express = require("express");
const router = express.Router();



var contactModel = require("../models/contactModel.js");


router.get("/",function(req,res){
   contactModel.find({},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            console.log(categ)
            return res.send(categ)
        }
    })
})
router.post("/",function(req,res){
    console.log(req.body)
  var data = new contactModel(req.body)

    data.save(function(err,obj){
        if(err){
            return res.send(err);
        }else{
            
           return res.send(obj)

        }
    })
})

router.put("/:id",function(req,res){
    var id= req.params.id;
   contactModel.findOneAndUpdate(id,req.body,function(err,obj){
        if(err){
            return res.send(err);
        }else{
            
          return res.send(obj)

        }
    })
 

})





module.exports = router;
