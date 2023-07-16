import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: ` <div class="container">
    <div>
      <img src="/assets/images/error404.png" alt="image" />
    </div>
    <div>
      <a routerLink="/">RETOUR ACCUEIL</a>
    </div>
  </div>`,

  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {}
