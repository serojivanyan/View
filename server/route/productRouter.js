const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var Schema  = mongoose.Schema;


var CategoriesModel = require("../models/categoriesModel.js");
router.get("/",function(req,res){
    CategoriesModel.product.find({},function(err,arr){
        if(err){
            return res.send(err)
        }else{
            return res.send(arr)
        }
    })
})
router.get("/:categ/:subcateg/:subsubcateg/:subsubsubcateg",function(req,res){
    CategoriesModel.product.find({
                                          mainCatId:req.params.categ,
                                          subCatId:req.params.subcateg,
                                          subsubCatId:req.params.subsubcateg,
                                          subsubsubCatId:req.params.subsubsubcateg},function(err,products){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            return res.send(products)
        }
    })
})

router.get("/:categ/:subcateg/:subsubcateg",function(req,res){
    CategoriesModel.product.find({
                                          mainCatId:req.params.categ,
                                          subCatId:req.params.subcateg,
                                          subsubCatId:req.params.subsubcateg,
                                          subsubsubCatId:null},function(err,products){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            return res.send(products)
        }
    })
})


router.get("/:categ/:subcateg",function(req,res){
    CategoriesModel.product.find({
                                          mainCatId:req.params.categ,
                                          subCatId:req.params.subcateg,
                                          subsubCatId:null},function(err,products){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            return res.send(products)
        }
    })
})



router.get("/:categ",function(req,res){
    CategoriesModel.product.find({
                                          mainCatId:req.params.categ,
                                          subCatId:null,
                                          subsubCatId:null},function(err,products){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            return res.send(products)
        }
    })
})

router.post("/:categ/:subcateg",function(req,res){
    var data = req.body;
   data.mainCatId=req.params.categ;
   data.subCatId=req.params.subcateg;
   data.subsubCatId=null;
   data.subsubsubCatId=null;
   console.log(data)
    
    var product = new CategoriesModel.product(data);
    product.save(function(err,obj){
        if(err){
            return res.send(err)
        }else{
            return res.send(obj)
        }
    })
})
router.post("/:categ/:subcateg/:subsubcateg/",function(req,res){
    var data = req.body;
   data.mainCatId=req.params.categ;
   data.subCatId=req.params.subcateg;
   data.subsubCatId=req.params.subsubcateg;
   data.subsubsubCatId=null;
   console.log(data)
    
    var product = new CategoriesModel.product(data);
    product.save(function(err,obj){
        if(err){
            return res.send(err)
        }else{
            return res.send(obj)
        }
    })
})
router.post("/:categ/:subcateg/:subsubcateg/:subsubsubcateg",function(req,res){
    var data = req.body;
   data.mainCatId=req.params.categ;
   data.subCatId=req.params.subcateg;
   data.subsubCatId=req.params.subsubcateg;
   data.subsubsubCatId=req.params.subsubsubcateg;
 
    
    var product = new CategoriesModel.product(data);
    console.log(product)
    product.save(function(err,obj){
        if(err){
            return res.send(err)
        }else{
            return res.send(obj)
        }
    })
})
router.put("/:id",function(req,res){
    var data = req.body;
    var prodId = req.params.id;
    CategoriesModel.product.findByIdAndUpdate(prodId,data,function(err,prod){
        if(err){
            return res.send(err);
        }else{
            return res.send(prod)
        }
    })
})


router.delete("/:id",function(req,res){
    var prodId = req.params.id;
    CategoriesModel.product.findByIdAndRemove(prodId,function(err,prod){
        if(err){
            return res.send(err)
        }else{
            return res.send({status:"ok",body:"deleted"})
        }
    })
})












module.exports = router;