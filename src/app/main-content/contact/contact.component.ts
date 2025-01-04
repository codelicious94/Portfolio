import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  mailTest = true;
  privacyPolicyChecked = false;
  emailSent = false;

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  post = {
    endPoint: 'https://www.simonmatter.ch/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.emailSent = true; // Erfolgsmeldung aktivieren
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.emailSent = true; // Erfolgsmeldung aktivieren
      ngForm.resetForm();
    }
  }

  togglePrivacyPolicy() {
    this.privacyPolicyChecked = !this.privacyPolicyChecked;
  }
}
