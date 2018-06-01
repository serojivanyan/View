import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../service'


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  params;
  categories;
  cat1;
  cat;
  catId;
  catUrl;
  str2;
  constructor(private route: ActivatedRoute, public router:Router, private http:DataService) { }
  edit(cat,modal,en,am,ru,enDesc1,amDesc1,ruDesc1){
    console.log(modal)
    modal.style.display="block";
    en.value=cat.categorieName.en;
    am.value=cat.categorieName.am;
    ru.value=cat.categorieName.ru;
    enDesc1.value=cat.categorieInfo.en;
    amDesc1.value=cat.categorieInfo.am;
    ruDesc1.value=cat.categorieInfo.ru;

   // this.http.getCategorieById(cat.id).subscribe(
   //   data=> {

            //  console.log(data);
              this.cat=cat.categorieName.en;
    //  }
  //  )
  //  this.cat1=cat;

  }
  delete(a){
   let x= confirm("Are you sure?");
    var cat =a.categorieName.en.trim()
   if (x){
     this.http.deleteCategorie(cat).subscribe(
       data => {
         console.log(data);
      location.reload();
      
       }
     )
   }


  }
editBtn(en,am,ru,enDesc1,amDesc1,ruDesc1,modal){
 var obj ={
   name: {
     en:en.value.trim(),
     am:am.value.trim(),
     ru:ru.value.trim()
    },
    info:{
      en:enDesc1.value.trim(),
      am:amDesc1.value.trim(),
      ru:ruDesc1.value.trim()
     }
}
    this.http.editCategorie(this.cat,obj).subscribe(
      data=> {
        console.log(data)
     
     location.reload();
      }
    )
modal.style.display="none"

}

cancel(modal){
  modal.style.display="none"
}

addCategorie(modal){
modal.style.display="block"
}
AddBtn(en,am,ru,enDesc,amDesc,ruDesc,modal){
  var obj ={
    name: {
      en:en.value.trim(),
      am:am.value.trim(),
      ru:ru.value.trim()
     },
     info:{
      en:enDesc.value.trim(),
      am:amDesc.value.trim(),
      ru:ruDesc.value.trim()
     }
 }
  this.http.addCategorie(obj, this.router.url).subscribe(
    data=> {
 
      modal.style.display="none";
      en.value="";
      am.value="";
      ru.value="";
      enDesc.value="";
      amDesc.value="";
      ruDesc.value="";
      
    location.reload()
    },
    error => {
      console.log(error)
    }
  )

  

}

  ngOnInit() {
    console.log("categorie")
  //  this.route.params.subscribe(param => this.params=JSON.parse(param.cat))
  this.http.getAllCategories().subscribe(
      data => {
        console.log(data),
        this.categories=data;
      }
  )

  this.route.queryParams.subscribe(
    param => {
      console.log(param);
      this.catId = param.catId;
    }
  )

  if (this.router.url=="/categories"){
    this.str2=["All Categories"]
  }
  else {
    this.catUrl = this.router.url.slice(12);
    var str5 = this.catUrl.split("/");
    for(var i=0;i<str5.length;i++){
     if(str5[i].indexOf("%20")>-1){
       str5[i]=str5[i].replace("%20"," ");

       
       
     }
    }
    this.str2=str5
    console.log(this.str2)
  }
  
  
  
  }

}
