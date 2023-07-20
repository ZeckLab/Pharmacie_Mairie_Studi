import {Component, OnInit} from '@angular/core';
import { SharedJsonService} from "../../services/shared-json/shared-json.service";

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss']
})
export class PartnersPageComponent implements OnInit {

  jsonData: any;

  constructor(private sharedJsonService: SharedJsonService) {
  }
  ngOnInit() {
    this.sharedJsonService.getData().subscribe(data => {
      this.jsonData = data;
    })
  }

}
