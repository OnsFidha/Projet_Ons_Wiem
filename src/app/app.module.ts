import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErrorComponent } from './components/error/error.component';
import { ListVoyageComponent } from './components/list-voyage/list-voyage.component';
import { ApropsComponent } from './components/aprops/aprops.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ErrorComponent,
    ListVoyageComponent,
    ApropsComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
