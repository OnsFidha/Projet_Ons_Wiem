import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AdminTraitementComponent } from './components/admin-traitement/admin-traitement.component';
import { AdminComponent } from './components/admin/admin.component';
import { ApropsComponent } from './components/aprops/aprops.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ListVoyageComponent } from './components/list-voyage/list-voyage.component';
import { RechercheVoyageComponent } from './components/recherche-voyage/recherche-voyage.component';
import { SelectedVoyageComponent } from './components/selected-voyage/selected-voyage.component';
import { Selected2voyageComponent } from './components/selected2voyage/selected2voyage.component';


const routes: Routes = [
  {path:"accueil",component:AccueilComponent},
  {path:"listVoyage",component:ListVoyageComponent},
  {path:"listVoyage/:desti" ,component:RechercheVoyageComponent},
  {path:'listeVoyage/:idd', component:SelectedVoyageComponent},
  {path:'listVoyages/:id2', component:Selected2voyageComponent},
  {path:"apropos",component:ApropsComponent},
  {path:"contact",component:ContactComponent},
  {path:"admin",component:AdminComponent},
  {path:"traitement",component:AdminTraitementComponent},
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
