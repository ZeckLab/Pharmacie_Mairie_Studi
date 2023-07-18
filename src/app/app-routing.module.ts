import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { PartnersPageComponent } from './components/partners-page/partners-page.component';
import { PrestationsPageComponent } from './components/prestations-page/prestations-page.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent},
  { path: 'partners', component: PartnersPageComponent},
  { path: 'prestations', component: PrestationsPageComponent},
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
