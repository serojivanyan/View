

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var Schema  = mongoose.Schema;


var CategoriesModel = require("../models/categoriesModel.js");






router.get("/",function(req,res){
    CategoriesModel.categorie.find({},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            res.send(categ)
        }
    })
})
router.get("/subcateg",function(req,res){
    CategoriesModel.subCategorie.find({},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            res.send(categ)
        }
    })
})

router.get("/subsubcateg",function(req,res){
    CategoriesModel.subSubCategorie.find({},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            res.send(categ)
        }
    })
})

router.get("/subsubsubcateg",function(req,res){
    CategoriesModel.subSubSubCategorie.find({},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            res.send(categ)
        }
    })
})







router.get("/:categ",function(req,res){
    CategoriesModel.subCategorie.find({mainCatId:req.params.categ},function(err,subcateg){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            return res.send(subcateg)
        }
    })
})


router.get("/:categ/:subcateg",function(req,res){
    CategoriesModel.subSubCategorie.find({mainCatId:req.params.categ,
                                          subCatId:req.params.subcateg},function(err,subSubcateg){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            return res.send(subSubcateg)
        }
    })
})
router.get("/:categ/:subcateg/:subsubcateg",function(req,res){
    CategoriesModel.subSubSubCategorie.find({mainCatId:req.params.categ,
                                          subCatId:req.params.subcateg,
                                          subsubCatId:req.params.subsubcateg},function(err,subSubcateg){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
            return res.send(subSubcateg)
        }
    })
})


router.post("/",function(req,res){
    var data = {};
    data.categorieName={};
    data.categorieInfo={};
    data.categorieName.en = req.body.name.en;
    data.categorieName.ru = req.body.name.ru;
    data.categorieName.am = req.body.name.am;
    data.categorieInfo.en = req.body.info.en;
    data.categorieInfo.ru = req.body.info.ru;
    data.categorieInfo.am = req.body.info.am;

    var categorie = new CategoriesModel.categorie(data);
    categorie.save(function(err,data){
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.send(data/*{"body":`categorie created by  name ${data.categorieName}`}*/)
    })
})
router.post("/:categ",function(req,res){
    var data = {};
    data.categorieName={};
    data.categorieInfo={};
    data.categorieName.en = req.body.name.en;
    data.categorieName.ru = req.body.name.ru;
    data.categorieName.am = req.body.name.am;
    data.categorieInfo.en = req.body.info.en;
    data.categorieInfo.ru = req.body.info.ru;
    data.categorieInfo.am = req.body.info.am;
    console.log(data)
   
   CategoriesModel.categorie.findOne({"categorieName.en":req.params.categ},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err)
        }else{
            data.mainCatId=categ.categorieName.en;
  
            var subcategorie = new CategoriesModel.subCategorie(data);
            subcategorie.save(function(err,subcateg){
                if(err){
                    console.log(err);
                    return res.send(err);
                 }else{
                     return res.send(subcateg/*{"body":`subcategorie created by  name ${subcateg.categorieName}`}*/)
                 }
           })
        }
   })


})


router.post("/:categorie/:subcateg",function(req,res){
    CategoriesModel.subCategorie.findOne({"categorieName.en": req.params.subcateg,mainCatId:req.params.categorie},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err)
        }else{
            var data = {};
            data.categorieName={};
            data.categorieInfo={};
            data.categorieName.en = req.body.name.en;
            data.categorieName.ru = req.body.name.ru;
            data.categorieName.am = req.body.name.am;
            data.categorieInfo.en = req.body.info.en;
            data.categorieInfo.ru = req.body.info.ru;
            data.categorieInfo.am = req.body.info.am;
            data.mainCatId=categ.mainCatId;
            data.subCatId =categ.categorieName.en;
            var subsubcategorie = new CategoriesModel.subSubCategorie(data);
            subsubcategorie.save(function(err,subcateg){
                if(err){
                    console.log(err);
                    return res.send(err);
                 }else{
                     return res.send(subcateg/*{"body":`subsubcategorie created by  name ${subcateg.categorieName}`}*/)
                 }
           })
        }
   })
})


router.post("/:categorie/:subcategorie/:subsubcateg",function(req,res){
    CategoriesModel.subSubCategorie.findOne({"categorieName.en": req.params.subsubcateg,mainCatId:req.params.categorie,subCatId:req.params.subcategorie},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err)
        }else{
            var data = {};
            data.categorieName={};
            data.categorieInfo={};
            data.categorieName.en = req.body.name.en;
            data.categorieName.ru = req.body.name.ru;
            data.categorieName.am = req.body.name.am;
            data.categorieInfo.en = req.body.info.en;
            data.categorieInfo.ru = req.body.info.ru;
            data.categorieInfo.am = req.body.info.am;
            data.mainCatId=categ.mainCatId;
            data.subCatId =categ.subCatId;
            data.subsubCatId = categ.categorieName.en;
            var subsubsubcategorie = new CategoriesModel.subSubSubCategorie(data);
            subsubsubcategorie.save(function(err,subcateg){
                if(err){
                    console.log(err);
                    return res.send(err);
                 }else{
                     return res.send(subcateg/*{"body":`subsubsubcategorie created by  name ${subcateg.categorieName}`}*/)
                 }
           })
        }
   })
})


router.delete("/:categ",function(req,res){
    var result = {}
    console.log(req.params.categ)
    CategoriesModel.categorie.findOneAndRemove({"categorieName.en":req.params.categ},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
       
           result.categ = "ok"
        }
    });
    CategoriesModel.subCategorie.remove({mainCatId:req.params.categ},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
      
            result.subCateg = "ok"
        }
    })
    CategoriesModel.subSubCategorie.remove({mainCatId:req.params.categ},function(err,categ){
        if(err){
            console.log(err);
            res.send(err);
        }else{
         
             result.subSubCateg = "ok"
        }
    })
    CategoriesModel.subSubSubCategorie.remove({mainCatId:req.params.categ},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{

            result.subSubSubCateg = "ok"
            
        }
    })
    CategoriesModel.product.remove({mainCatId:req.params.categ},function(err,categ){
        if(err){
            return res.send(err);
        }else{
            result.product="ok"
             return res.send(result)
        }
    })
})


router.delete("/:categ/:subcateg",function(req,res){
    var result = {}
    console.log(req.params.categ)
    
    CategoriesModel.subCategorie.remove({mainCatId:req.params.categ,"categorieName.en":req.params.subcateg},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
      
             result.subCateg = "ok"
        }
    })
    CategoriesModel.subSubCategorie.remove({mainCatId:req.params.categ,subCatId:req.params.subcateg},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
         
             result.subSubCateg = "ok"
        }
    })
    CategoriesModel.subSubSubCategorie.remove({mainCatId:req.params.categ,subCatId:req.params.subcateg},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{

            result.subSubSubCateg = "ok"
         
        }
    })
    CategoriesModel.product.remove({mainCatId:req.params.categ,subCatId:req.params.subcateg},function(err,categ){
        if(err){
            return res.send(err);
        }else{
            result.product="ok"
            return res.send(result)
        }
    })
});

router.delete("/:categ/:subcateg/:subsubcateg",function(req,res){
    var result = {}
    console.log(req.params.categ)
    
    
    CategoriesModel.subSubCategorie.remove({mainCatId:req.params.categ,subCatId:req.params.subcateg,"categorieName.en":req.params.subsubcateg},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
         
           result.subSubCateg = "ok"
        }
    })
    CategoriesModel.subSubSubCategorie.remove({mainCatId:req.params.categ,subCatId:req.params.subcateg,subsubCatId:req.params.subsubcateg},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{

            result.subSubSubCateg = "ok"
             
        }
    })
    CategoriesModel.product.remove({mainCatId:req.params.categ,subCatId:req.params.subcateg,subsubCatId:req.params.subsubcateg},function(err,categ){
        if(err){
            return res.send(err);
        }else{
            result.product="ok"
            return res.send(result)
        }
    })
})


router.delete("/:categ/:subcateg/:subsubcateg/:subsubsubcateg",function(req,res){
    var result = {}
    console.log(req.params.categ)
    
   
    CategoriesModel.subSubSubCategorie.remove({mainCatId:req.params.categ,subCatId:req.params.subcateg,subsubCatId:req.params.subsubcateg,"categorieName.en":req.params.subsubsubcateg},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{

            result.subSubSubCateg = "ok"
           
        }
    })
    CategoriesModel.product.remove({mainCatId:req.params.categ,subCatId:req.params.subcateg,subsubCatId:req.params.subsubcateg,categorieName:req.params.subsubsubcateg},function(err,categ){
        if(err){
            return res.send(err);
        }else{
            result.product="ok"
            return res.send(result)
        }
    })
})










router.put("/:categ",function(req,res){
    var result = {}
    console.log(req.params.categ);
    console.log(req.body.name)
    var catName = req.body.name;
    var catInfo = req.body.info;
    CategoriesModel.categorie.findOneAndUpdate({"categorieName.en":req.params.categ},{categorieName:catName,categorieInfo:catInfo},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
       
           return result.categ = "updateed"
        }
    });
    CategoriesModel.subCategorie.updateMany({mainCatId:req.params.categ},{mainCatId:catName.en},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
      
            return result.subCateg = "updateed"
        }
    })
    CategoriesModel.subSubCategorie.updateMany({mainCatId:req.params.categ},{mainCatId:catName.en},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
         
            return result.subSubCateg = "updateed"
        }
    })
    CategoriesModel.subSubSubCategorie.updateMany({mainCatId:req.params.categ},{mainCatId:catName.en},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{

            result.subSubSubCateg = "updateed"
            return  res.send(result);
        }
    })
})


router.put("/:categ/:subcateg",function(req,res){
    var catName = req.body.name;
    var catInfo = req.body.info;
    var result = {}
    
    
    CategoriesModel.subCategorie.updateMany({mainCatId:req.params.categ,"categorieName.en":req.params.subcateg},{categorieName:catName,categorieInfo:catInfo},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
      
            result.subCateg = "ok"
        }
    })
    CategoriesModel.subSubCategorie.updateMany({mainCatId:req.params.categ,subCatId:req.params.subcateg},{subCatId:catName.en},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
         
            result.subSubCateg = "ok"
        }
    })
    CategoriesModel.subSubSubCategorie.updateMany({mainCatId:req.params.categ,subCatId:req.params.subcateg},{subCatId:catName.en},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{

            result.subSubSubCateg = "ok"
            res.send(result);
        }
    })
});

router.put("/:categ/:subcateg/:subsubcateg",function(req,res){
    var catName = req.body.name;
    var catInfo = req.body.info;
    var result = {}
    
    
    CategoriesModel.subSubCategorie.updateMany({mainCatId:req.params.categ,subCatId:req.params.subcateg,"categorieName.en":req.params.subsubcateg},{categorieName:catName,categorieInfo:catInfo},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{
         
            result.subSubCateg = "ok"
        }
    })
    CategoriesModel.subSubSubCategorie.updateMany({mainCatId:req.params.categ,subCatId:req.params.subcateg,subsubCatId:req.params.subsubcateg},{subsubCatId:catName.en},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{

            result.subSubSubCateg = "ok"
            res.send(result);
        }
    })
})


router.put("/:categ/:subcateg/:subsubcateg/:subsubsubcateg",function(req,res){
    var catName = req.body.name;
    var catInfo = req.body.info;
    var result = {}
    
    CategoriesModel.subSubSubCategorie.updateMany({mainCatId:req.params.categ,subCatId:req.params.subcateg,subsubCatId:req.params.subsubcateg,"categorieName.en":req.params.subsubsubcateg},{categorieName:catName,categorieInfo:catInfo},function(err,categ){
        if(err){
            console.log(err);
            return res.send(err);
        }else{

            result.subSubSubCateg = "ok"
            res.send(result);
        }
    })
})













module.exports = router;

