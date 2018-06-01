import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { DataService } from '../service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http:DataService) { }
  data;
  contact(form){
    this.http.setContact(form,this.data._id).subscribe(
      data => {
        console.log(data);
        location.reload()
      }
    )
  }
  ngOnInit() {
    this.http.getContact().subscribe(
      data => {
        this.data=data[0]
      }
    )
  }

}
