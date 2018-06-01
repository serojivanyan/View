const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var Schema  = mongoose.Schema;


var CategoriesModel = require("../models/categoriesModel.js");


router.get("/:id",function(req,res){
    
    CategoriesModel.product.findById(req.params.id,function(err,prodSingle){
        if(err){
            return res.send(err)
        }else{
            return res.send(prodSingle)
        }
    })
})

router.delete("/:id",function(req,res){
    
    CategoriesModel.product.findByIdAndRemove(req.params.id,function(err,prodSingle){
        if(err){
            return res.send(err)
        }else{
            return res.send({status:"ok",body:"deleted"})
        }
    })
})
router.put("/:id",function(req,res){
    
    CategoriesModel.product.findByIdAndUpdate(req.params.id,req.body,function(err,prodSingle){
        if(err){
            return res.send(err)
        }else{
            return res.send({status:"ok",body:"updated"})
        }
    })
})



module.exports = router;