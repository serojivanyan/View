import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../service'
import {NgForm} from '@angular/forms'



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  catUrl;
  str2;
  params;
  categories;
  cat;
  products;
  
  constructor(private route: ActivatedRoute, public router:Router, private http:DataService) { }
  edit(item){
    this.router.navigate(["item/"+item._id])
  }
  cancel(modal){
    modal.style.display="none"
  }
  images=[];
  changeListener($event) : void {
  console.log($event.target.files )
  for (let i=0; i<$event.target.files.length;i++){
    this.readThis($event.target.files[i]);
  }
    
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue;
    var myReader:FileReader = new FileReader();
  
      myReader.readAsDataURL(file);
      
   
    myReader.onloadend = (e) => {
        this.images.push(myReader.result)
        
      }
    
  }

addProduct(modal){
 modal.style.display="block"
}

submit(myForm,modal){
  
  myForm.value.newProduct=Boolean( myForm.value.newProduct);
  myForm.value.hotProduct=Boolean( myForm.value.hotProduct);
 
  var form={
    newProduct:Boolean( myForm.value.newProduct),
    hotProduct:Boolean( myForm.value.hotProduct),
    images:this.images,
    price:myForm.value.price,
    title: {
      en:myForm.value.titleEn,
      ru:myForm.value.titleRu,
      am:myForm.value.titleArm,
      
    },
    description: {
      en:myForm.value.descriptionEn,
      ru:myForm.value.descriptionRu,
      am:myForm.value.descriptionArm,
      
    }
  }
  console.log(form)
  this.http.addProduct(form).subscribe(
    data => {
      console.log(data);
      myForm.reset()
      this.http.getProduct().subscribe(
        data => {
          this.products=data;
          console.log(data)
        }
      )
      modal.style.display="none";
    }
  )
//  location.reload()
} 
  

  ngOnInit() {
    this.http.getProduct().subscribe(
      data => {
        this.products=data;
        console.log(data)
      }
    )

    this.catUrl = this.router.url.slice(10);
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
