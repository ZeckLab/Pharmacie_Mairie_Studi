import {Component, OnInit} from '@angular/core';
import {SharedJsonService} from "../../../sercices/shared-json/shared-json.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: any; // Variable to store the event data

  constructor(private sharedJsonService: SharedJsonService) { }

  ngOnInit(): void {
    this.sharedJsonService.getData().subscribe(data => {
      // Assuming the JSON data contains an "event" property with an array of events
      this.event = data.event;
    });
  }

}
