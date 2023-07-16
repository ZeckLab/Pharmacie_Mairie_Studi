import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LocalisationComponent } from './components/home/localisation/localisation.component';
import { HoursLocalisationComponent } from './components/home/localisation/hours-localisation/hours-localisation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalisationComponent,
    HoursLocalisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
