import {Component, OnInit} from '@angular/core';
import {SharedJsonService} from "../../../sercices/shared-json/shared-json.service";

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.scss']
})
export class ProductsHomeComponent implements OnInit{

  jsonData: any;
  promotions: any[] = []; // Initialize the 'promotions' array

  constructor(private sharedJsonService: SharedJsonService) {
  }

  ngOnInit() {
    this.sharedJsonService.getData().subscribe(data => {
      this.jsonData = data;
      // Filter articles in promotion and select the first 3
      this.promotions = this.jsonData.articles.filter((article: any) => article.promotion).slice(0, 3);
    });
  }

}
