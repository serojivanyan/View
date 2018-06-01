import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import { DataService } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public router: Router,public http:DataService) {

  }
  lang='/eng';
  date = new Date();
categories;
subcategories;
subsubcategories;
subsubsubcategories;
param=JSON.stringify(this.categories);
  disp="none";
  time=this.date;
  timeShow(){
    setInterval(()=>{
      this.date=new Date()
      this.time=this.date;
    
    },1000); 
    }
   
cat="";


    dropdown(disp,cat){
  
if (disp.style.display=="block"){
  disp.style.display="none";
  this.cat="";
  console.log("noned")
}
else if (disp.style.display=="none"){
  disp.style.display="block";
  console.log("blocked")
  this.cat+=cat+"/"; console.log(this.cat)
  this.http.getCategorie(this.cat).subscribe(
    data => {
      console.log(data),
      this.categories=data;
    }
  
  )
}



}
dropdown1(disp,cat){
  
  if (disp.style.display=="block"){
    disp.style.display="none";
    this.cat="";
    console.log("noned")
  }
  else if (disp.style.display=="none"){
    disp.style.display="block";
    console.log("blocked")
    this.cat+=cat+"/"; console.log(this.cat)
    this.http.getCategorie(this.cat).subscribe(
      data => {
        console.log(data),
        this.categories=data;
      }
    
    )
  }
  }
openCats(div){
  
  if (div.style.display=="block"){
    div.style.display="none";
    
    console.log("noned")
  }
  else if (div.style.display=="none"){
    div.style.display="block";
    console.log("blocked")

  }
}


getProducts1(cat,div){
  console.log(cat)
  
 
  console.log(div.getElementsByClassName("pSubSubcat").length)
  if (div.getElementsByClassName("pSubSubcat").length==0){
    this.router.navigate(["/products/"+cat.mainCatId+"/"+cat.categorieName.en])
    location.reload()
  }
 // console.log(div.getElementsByClassName("pSubcat").length)

}


getProducts11(cat,div){
console.log(cat)
console.log(div.getElementsByClassName("pSubSubSubcat").length)
if (div.getElementsByClassName("pSubSubSubcat").length==0){
  this.router.navigate(["/products/"+cat.mainCatId+"/"+cat.subCatId+"/"+cat.categorieName.en])
  location.reload()
 }
}


getProducts111(cat){
  console.log(cat)
  this.router.navigate(["/products/"+cat.mainCatId+"/"+cat.subCatId+"/"+cat.subsubCatId+"/"+cat.categorieName.en])
  location.reload()
}



 ngOnInit(){
   this.timeShow();
  //  this.http.getLang().subscribe(
  //    data=>{
      
  //      this.lang = data[0].langName
  //      console.log(this.lang);
  //    }
  //  )

 
  this.http.getCategories().subscribe(
    data=> {
      console.log(data);
      this.categories=data;
    }
  )


  this.http.getSubCategories().subscribe(
    data=> {
      console.log(data);
      this.subcategories=data;
    }
  )


  this.http.getSubSubCategories().subscribe(
    data=> {
      console.log(data);
      this.subsubcategories=data;
    }
  )


  this.http.getSubSubSubCategories().subscribe(
    data=> {
      console.log(data);
      this.subsubsubcategories=data;
    }
  )

 
}
}