import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SharedService } from '../../../shared/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  public contactData: { name: string; email: string; message: string } = {
    name: '',
    email: '',
    message: '',
  };
  public agree: boolean = false;
  public submitAttempted: boolean = false;

  constructor(public sharedService: SharedService) {}

  public mailTest: boolean = false;
  private http = inject(HttpClient);

  private readonly postConfig = {
    endPoint: 'http://ayyub-qarar.de/sendMail.php',
    options: {
      headers: { 'Content-Type': 'text/plain', responseType: 'text' },
    },
  };

  public toggleAgree(): void {
    this.agree = !this.agree;
    this.submitAttempted = true;
  }

  public onSubmit(ngForm: NgForm): void {
    if (!ngForm.submitted || !ngForm.form.valid) return;

    if (this.mailTest) {
      console.log(ngForm.value);
    } else {
      this.http
        .post(
          this.postConfig.endPoint,
          JSON.stringify(this.contactData),
          this.postConfig.options
        )
        .subscribe({
          next: () => ngForm.resetForm(),
          error: (error) => console.error(error),
          complete: () => console.info('Post request completed'),
        });
    }

    ngForm.resetForm();
  }
}
