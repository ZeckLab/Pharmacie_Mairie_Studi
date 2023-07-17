import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/home/event-home/event.component';
import { BrandsHomeComponent } from './components/home/brands-home/brands-home.component';
import { ProductsHomeComponent } from './components/home/products-home/products-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    BrandsHomeComponent,
    ProductsHomeComponent
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
