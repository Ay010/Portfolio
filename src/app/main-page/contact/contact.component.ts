import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SharedService } from '../../shared/shared.service';
import { HttpClient } from '@angular/common/http';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  // public contactData: { name: string; email: string; message: string } = {
  //   name: '',
  //   email: '',
  //   message: '',
  // };
  // public agree: boolean = false;
  // public submitAttempted: boolean = false;
  // public mailTest: boolean = true;

  // private http = inject(HttpClient);

  // private readonly postConfig = {
  //   endPoint: 'https://deineDomain.de/sendMail.php',
  //   options: {
  //     headers: { 'Content-Type': 'text/plain', responseType: 'text' },
  //   },
  // };

  constructor(public sharedService: SharedService) {}

  // public toggleAgree(): void {
  //   this.agree = !this.agree;
  //   this.submitAttempted = true;
  // }

  // public onSubmit(ngForm: NgForm): void {
  //   if (!ngForm.submitted || !ngForm.form.valid) return;

  //   if (this.mailTest) {
  //     console.log(ngForm.value);
  //   } else {
  //     this.http
  //       .post(
  //         this.postConfig.endPoint,
  //         JSON.stringify(this.contactData),
  //         this.postConfig.options
  //       )
  //       .subscribe({
  //         next: () => ngForm.resetForm(),
  //         error: (error) => console.error(error),
  //         complete: () => console.info('Post request completed'),
  //       });
  //   }

  //   ngForm.resetForm();
  // }
}
