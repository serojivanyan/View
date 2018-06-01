import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import {DataService} from './service';
import { ProductComponent } from './product/product.component'
import {FormsModule} from '@angular/forms';
import { SetLanguageComponent } from './setlanguage/setlanguage.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductComponent,
    SetLanguageComponent,
    AboutComponent,
    ProductDetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: "full", redirectTo: "home" }, 
      
      {path:"categories", component:CategoriesComponent},
    
      {path:"categories/:cat", component:CategoriesComponent},
    
      {path:"categories/:cat/:subcat", component:CategoriesComponent},
     
      {path:"categories/:cat/:subcat/:subsubcat", component:CategoriesComponent},
     
     { path: 'products/:cat/:sub', component: ProductComponent }, 
  
      { path: 'products/:cat/:sub/:subsub', component: ProductComponent }, 
     

      { path: 'products/:cat/:sub/:subsub/:subsubsub', component: ProductComponent }, 
    
      { path: 'item/:id', component: ProductDetailComponent }, 
     
    

     { path: 'setlanguage', component: SetLanguageComponent },
 
     { path: 'about', component: AboutComponent },

     { path: 'contact', component: ContactComponent },
 
    ],
  )
  ],
  providers: [ 
    DataService, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    
  },
HttpClient
],
  bootstrap: [AppComponent]
})
export class AppModule { }
