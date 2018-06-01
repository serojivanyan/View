import { Component, OnInit } from '@angular/core';
import {DataService } from "../service"

@Component({
  selector: 'app-language',
  templateUrl: './setlanguage.component.html',
  styleUrls: ['./setlanguage.component.css']
})
export class SetLanguageComponent implements OnInit {

  constructor(public http:DataService) { }
 langs;
hrefLang;
langHref;
 changeLang(e, id){
  console.log(e)
  console.log(id)
  this.http.changeLang(id).subscribe(
    data => {
      console.log(data);
      location.reload()
      


this.http.getSettedLang().subscribe(
  data=>{
    // if(location.href.indexOf("eng")>-1){
    //   this.langHref="eng";
    // }else if(location.href.indexOf("arm")>-1){
    //   this.langHref="arm";
    // }else if(location.href.indexOf("ru")>-1){
    //   this.langHref="ru";
    // }
    
  
// location.href.replace(this.langHref,data[].status)

    this.langs=data;
    console.table(data);
    
  }
)
     }
  )
 }
  ngOnInit() {

this.http.getSettedLang().subscribe(
  data=>{
    this.langs=data;
    console.table(data)
  }
)

  }

}
