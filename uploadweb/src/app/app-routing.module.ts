import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeComponent } from './demande/demande.component';
import { ConsulterdemandeComponent } from './consulterdemande/consulterdemande.component';




const routes: Routes = [
{path:"demandes",component:DemandeComponent},
{path:"consulter",component:ConsulterdemandeComponent},

 {path:"",redirectTo:"demandes",pathMatch:"full"}
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
