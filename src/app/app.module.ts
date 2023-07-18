import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/home/event-home/event.component';
import { BrandsHomeComponent } from './components/home/brands-home/brands-home.component';
import { LocalisationComponent } from './components/home/localisation/localisation.component';
import { HoursLocalisationComponent } from './components/home/localisation/hours-localisation/hours-localisation.component';
import { MapLocalisationComponent } from './components/home/localisation/map-localisation/map-localisation.component';
import { AddressLocalisationComponent } from './components/home/localisation/address-localisation/address-localisation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    BrandsHomeComponent,
    LocalisationComponent,
    HoursLocalisationComponent,
    MapLocalisationComponent,
    AddressLocalisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
