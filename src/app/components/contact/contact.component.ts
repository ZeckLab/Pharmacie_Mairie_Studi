import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  selectedCountryCode: string = '';
  formData = {
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  };



}
