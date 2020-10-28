import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemandeComponent } from './demande/demande.component';
import { ConsulterdemandeComponent } from './consulterdemande/consulterdemande.component';



@NgModule({
  declarations: [
    AppComponent,
  DemandeComponent,
  ConsulterdemandeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
