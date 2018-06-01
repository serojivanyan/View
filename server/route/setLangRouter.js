const express = require("express");
const router = express.Router();



var setLangModel = require("../models/setLangModel.js");


router.get("/",function(req,res){
    setLangModel.find({},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            console.log(categ)
            res.send(categ)
        }
    })
})

router.put("/",function(req,res){
    var id = req.body.id;

    setLangModel.findOne({default:true},function(err,obj){
        if(err){
            return res.send(err);
        }else{
            obj.default=false;
            obj.save()

        }
    })
    setLangModel.findById(id,function(err,prod){
        if(err){
            return res.send(err);
        }else{
            prod.default=true;
            prod.save();
            return res.send(prod)
        }
    })

})





module.exports = router;
