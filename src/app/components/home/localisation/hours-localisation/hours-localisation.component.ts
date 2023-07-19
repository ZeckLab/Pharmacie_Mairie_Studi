import { Component } from '@angular/core';

@Component({
    selector: 'app-hours-localisation',
    templateUrl: './hours-localisation.component.html',
    styleUrls: ['./hours-localisation.component.scss']
})
export class HoursLocalisationComponent {

    openHour:string = '9:30 - 18:00';
    closeDay:string = 'fermé';

    constructor() {}

}