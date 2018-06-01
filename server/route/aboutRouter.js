const express = require("express");
const router = express.Router();



var aboutModel = require("../models/aboutModel.js");


router.get("/",function(req,res){
    aboutModel.about.find({},function(err,categ){
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
  var data = new aboutModel.about(req.body)

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
   var data = {};
   data.text={}
   data.text.en = req.body.en;
   data.text.ru = req.body.ru;
   data.text.am=req.body.am;
console.log(req.body)
    aboutModel.about.findByIdAndUpdate(id,data,function(err,obj){
        if(err){
            return res.send(err);
        }else{
            console.log(obj)
            obj.save()
          return res.send(obj)

        }
    })
 

})





module.exports = router;
