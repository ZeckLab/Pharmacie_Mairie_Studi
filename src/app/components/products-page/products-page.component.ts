import { Component, OnInit } from '@angular/core';
import { SharedJsonService } from 'src/app/services/shared-json/shared-json.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  
})
export class ProductsPageComponent implements OnInit {
  event: any; // Variable to store the event data

  products: any[] = [];

  constructor(private sharedJsonService: SharedJsonService) {}

  ngOnInit(): void {
    this.sharedJsonService.getData().subscribe((data) => {
      // Assuming the JSON data contains an "event" property with an array of events

      this.products = data.articles;
    });
  }
}
