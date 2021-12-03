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
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
