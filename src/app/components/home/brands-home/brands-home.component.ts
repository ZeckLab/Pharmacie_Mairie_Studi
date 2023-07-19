import { Component, OnInit } from '@angular/core';
import {SharedJsonService} from "../../../services/shared-json/shared-json.service";

@Component({
    selector: 'app-brands-home',
    templateUrl: './brands-home.component.html',
    styleUrls: ['./brands-home.component.scss']
})
export class BrandsHomeComponent implements OnInit {

    jsonData: any;

    constructor(private sharedJsonService: SharedJsonService) {
    }

    ngOnInit() {
        this.sharedJsonService.getData().subscribe(data => {
        this.jsonData = data;
      // Show only the first 6 elements of the "brands" array
        this.jsonData.brands = this.jsonData.brands.slice(0, 6);
        });

    }
}