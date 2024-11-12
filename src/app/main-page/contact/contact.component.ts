import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
    agree: false, // Hinzugefügt: Checkbox-Feld für Zustimmung
  };

  public submitAttempted = false; // Flag to track if submit was attempted

  toggleAgree() {
    this.contactData.agree = !this.contactData.agree;
    this.submitAttempted = true;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
