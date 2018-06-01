import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'

@Injectable()
export class DataService {
    constructor(private http:HttpClient, public router:Router){

    }

   url = "http://localhost:5000"

    getAllCategories(){
        console.log(this.router.url)
       return this.http.get(this.url+this.router.url)
    }
    getCategories(){
        
       return this.http.get(this.url+"/categories")
    }
   
    getSubCategories(){
        
        return this.http.get(this.url+"/categories/subcateg")
     }

     getSubSubCategories(){
        
        return this.http.get(this.url+"/categories/subsubcateg")
     }

     getSubSubSubCategories(){
        
        return this.http.get(this.url+"/categories/subsubsubcateg")
     }


    getCategorie(url){
        
        return this.http.get(this.url+this.router.url+"/"+url)
    }
    getCategorieById(id){
        
        return this.http.get(this.url+this.router.url+"/"+id)
    }

    editCategorie(cat,name){
        console.log(this.router.url+"/"+cat)
        return this.http.put(this.router.url+"/"+cat,name);
        
    }


    deleteCategorie(cat){
        return this.http.delete(this.router.url+"/"+cat);
    }

    addCategorie(catname,url){
        return this.http.post(this.url+url,catname);
    }
    addProduct(data){
        return this.http.post(this.url+this.router.url,data);

    }

    getProduct(){
        return this.http.get(this.url+this.router.url);
    }

    editProduct(data){
        return this.http.put(this.url+this.router.url,data);
    }
   deleteItem(){
    return this.http.delete(this.url+this.router.url);
   }
   getSettedLang(){
       return this.http.get(this.url+this.router.url)
   }

   changeLang(id){
     return  this.http.put(this.url+this.router.url, {id:id})
   }
   getLang(){
       return this.http.get(this.url+"/getlanguage")
   }


   setAbout(data,id){
    return this.http.put(this.url+"/about/"+id,data)
   }
   getAbout(){
    return this.http.get(this.url+"/about")
   }

   setContact(data,id){
     return this.http.put(this.url+"/contact/"+id,data)
    
   }
   getContact(){
    return this.http.get(this.url+"/contact")
   }




}