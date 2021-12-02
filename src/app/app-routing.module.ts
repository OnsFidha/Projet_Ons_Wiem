import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ApropsComponent } from './components/aprops/aprops.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ListVoyageComponent } from './components/list-voyage/list-voyage.component';
import { RechercheVoyageComponent } from './components/recherche-voyage/recherche-voyage.component';

const routes: Routes = [
  {path:"accueil",component:AccueilComponent},
  {path:"listVoyage",component:ListVoyageComponent},
  {path:"listVoyage/:id" ,component:RechercheVoyageComponent},
  {path:"apropos",component:ApropsComponent},
  {path:"contact",component:ContactComponent},
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
