import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SharedService } from '../../shared/shared.service';
import { HttpClient } from '@angular/common/http';

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
  };
  public agree = false;
  public submitAttempted = false;

  mailTest = true;

  http = inject(HttpClient);

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(public sharedService: SharedService) {}

  toggleAgree() {
    this.agree = !this.agree;
    this.submitAttempted = true;
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(ngForm.value);
      ngForm.resetForm();
    }
  }
}
