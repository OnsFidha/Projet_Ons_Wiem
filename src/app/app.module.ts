import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErrorComponent } from './components/error/error.component';
import { ListVoyageComponent } from './components/list-voyage/list-voyage.component';
import { ApropsComponent } from './components/aprops/aprops.component';
import { ContactComponent } from './components/contact/contact.component';
import { NomPipe } from './nom.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RechercheVoyageComponent } from './components/recherche-voyage/recherche-voyage.component';
import { SelectedVoyageComponent } from './components/selected-voyage/selected-voyage.component';
import { Selected2voyageComponent } from './components/selected2voyage/selected2voyage.component';
import { FooterComponent } from './components/footer/footer.component';

import { AdminTraitementComponent } from './components/admin-traitement/admin-traitement.component';
import { AdminComponent } from './components/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ErrorComponent,
    ListVoyageComponent,
    ApropsComponent,
    ContactComponent,
    NomPipe,
    RechercheVoyageComponent,
    SelectedVoyageComponent,
    Selected2voyageComponent,
    FooterComponent,
   
    AdminTraitementComponent,
    AdminComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
