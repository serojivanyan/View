import { Component, OnInit } from '@angular/core';
import {DataService} from '../service'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private http:DataService) { }
  images=[];
  product;
  changeListener($event) : void {
    this.images=[]
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
        console.log(this.images)
      }
    
  }
  
    submit(myForm){
 

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
      this.http.editProduct(form).subscribe(
        data => {
          console.log(data);
          
          history.back();
        
             },
             err => {
               console.log(err)
             }
      )
    //  location.reload()
    
  }
  deleteItem(){
    var harc=confirm("Are You Sure?");
    if(harc){
this.http.deleteItem().subscribe(
  data => {console.log(data);
    history.back();
  }
  
)
}
  }
  ngOnInit() {
    this.http.getProduct().subscribe(
      data => {console.log(data),
      this.product=data;
      this.images=data['images']
      }
    )
  }

}
