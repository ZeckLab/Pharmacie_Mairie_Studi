import { Component } from '@angular/core';
import {SharedJsonService} from "../../services/shared-json/shared-json.service";

@Component({
  selector: 'app-prestations-page',
  templateUrl: './prestations-page.component.html',
  styleUrls: ['./prestations-page.component.scss']
})
export class PrestationsPageComponent {

  prestation: any;

  constructor(private sharedJsonService: SharedJsonService) {
  }

  ngOnInit() {
    this.sharedJsonService.getData().subscribe(data => {
      this.prestation = data;
      console.log(this.prestation);
    })

  }
}
