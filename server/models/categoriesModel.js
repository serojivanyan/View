const mongoose = require("mongoose");


const productModelSchema = mongoose.Schema({
    title :{
        en:{
            type:String,
            required:true,
        },
        ru:{
            type:String,
            required:true,
        },
        am:{
            type:String,
            required:true,
        }
    },
    description : {
        en:{
            type:String,
            required:true,
        },
        ru:{
            type:String,
            required:true,
        },
        am:{
            type:String,
            required:true,
        }
    },
    images:[],
    price:{
        type:Number,
        required:true,
    },
    newProduct : {
        type:Boolean,
    },
    hotProduct : {
        type:Boolean,
    },
    mainCatId : { 
        type: String,
        required:true, 
    },
    subCatId: { type: String },
    subsubCatId:{type: String},
    subsubsubCatId:{type:String}
});




const subSubSubCategoriesModelSchema = mongoose.Schema({
    categorieName : {
        en:{
            type:String
        },
        ru:{
            type:String
        },
        am:{
            type:String
        }
    },
    categorieInfo:{
        en:{
            type:String
        },
        ru:{
            type:String
        },
        am:{
            type:String
        }
    },
    products:[productModelSchema],
    mainCatId : { type: String },
    subCatId: { type: String },
    subsubCatId:{type: String}
})
const subSubCategoriesModelSchema = mongoose.Schema({
    categorieName : {
        en:{
            type:String
        },
        ru:{
            type:String
        },
        am:{
            type:String
        },
        categorieInfo:{
            en:{
                type:String
            },
            ru:{
                type:String
            },
            am:{
                type:String
            }
        }
    },
   
    products:[productModelSchema],
    mainCatId : { type: String },
    subCatId: { type: String }
})

const subCategoriesModelSchema = mongoose.Schema({
    categorieName : {
        en:{
            type:String
        },
        ru:{
            type:String
        },
        am:{
            type:String
        }
    },
    categorieInfo:{
        en:{
            type:String
        },
        ru:{
            type:String
        },
        am:{
            type:String
        }
    },
    products:[productModelSchema],
    mainCatId :{ type: String }
})




const categoriesModelSchema = mongoose.Schema({
    categorieName : {
        en:{
            type:String
        },
        ru:{
            type:String
        },
        am:{
            type:String
        }
    },  
      categorieInfo:{
        en:{
            type:String
        },
        ru:{
            type:String
        },
        am:{
            type:String
        }
    }

  
 //  subCategories:[{type: Schema.Types.ObjectId}],

})



const categorie= mongoose.model("categorie",categoriesModelSchema);
const subcategorie= mongoose.model("subcategorie",subCategoriesModelSchema);
const subsubcategorie= mongoose.model("subsubcategorie",subSubCategoriesModelSchema);
const subsubsubcategorie= mongoose.model("subsubsubcategorie",subSubSubCategoriesModelSchema);
const product= mongoose.model("product",productModelSchema);
module.exports = {
                "categorie":categorie,
                "subCategorie":subcategorie,
                "subSubCategorie":subsubcategorie,
                "subSubSubCategorie":subsubsubcategorie,
                "product":product
            };



