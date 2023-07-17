import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '' ,
    message: '',
  };

  submitForm() {
    console.log(this.formData);

    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
