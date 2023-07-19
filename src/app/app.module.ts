import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LocalisationComponent } from './components/home/localisation/localisation.component';
import { HoursLocalisationComponent } from './components/home/localisation/hours-localisation/hours-localisation.component';
import { MapLocalisationComponent } from './components/home/localisation/map-localisation/map-localisation.component';
import { AddressLocalisationComponent } from './components/home/localisation/address-localisation/address-localisation.component';
import { ProductsHomeComponent } from './components/home/products-home/products-home.component';
import { EventHomeComponent } from './components/home/event-home/event-home.component';
import { BrandsHomeComponent } from './components/home/brands-home/brands-home.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { PartnersPageComponent } from './components/partners-page/partners-page.component';
import { HttpClientModule } from '@angular/common/http';
import {PrestationsPageComponent} from "./components/prestations-page/prestations-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventHomeComponent,
    BrandsHomeComponent,
    LocalisationComponent,
    HoursLocalisationComponent,
    MapLocalisationComponent,
    AddressLocalisationComponent,
    ProductsHomeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ContactComponent,
    FooterComponent,
    ProductsPageComponent,
    PartnersPageComponent,
    PrestationsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
