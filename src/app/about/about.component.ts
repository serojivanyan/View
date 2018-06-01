import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup} from '@angular/forms'
import { DataService  } from "../service"

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public http:DataService) { }
  data;
  about(form){
   console.log(form)
  
 this.http.setAbout(form,this.data._id).subscribe(
   data=>{
     console.log(data);
     location.reload()
   }
 )
  }



 
  
  ngOnInit() {
    this.http.getAbout().subscribe(
      data=>{
        console.log(data)
        this.data=data[0];
      }
    )
  }

}
