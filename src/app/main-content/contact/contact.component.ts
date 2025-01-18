import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RouterLink, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  isSending: boolean = false;
  emailSent: boolean = false;
  isChecked: boolean = false;

  privacyPolicyChecked: boolean = false;
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  isFormValid(): boolean {
    return (
      (this.contactData.name?.trim() || '').length > 0 &&
      (this.contactData.email?.trim() || '').length > 0 &&
      (this.contactData.message?.trim() || '').length > 0 &&
      this.isChecked
    );
  }

  post = {
    endPoint: 'https://www.simonmatter.ch/portfolio/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.isSending = true; 
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.emailSent = true;
  
            setTimeout(() => {
              this.emailSent = false;
            }, 2000);
  
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Error:', error);
            alert('Failed to send the email. Please try again later.');
          },
          complete: () => {
            this.isSending = false;
          },
        });
    }
  }
  

  closeOverlay(contactForm: NgForm) {
    this.emailSent = false; 
    this.resetForm(contactForm);
  }


  resetForm(contactForm: NgForm) {
    this.contactData = { name: '', email: '', message: '' };
    contactForm.reset();
  }


  togglePrivacyPolicy() {
    this.privacyPolicyChecked = !this.privacyPolicyChecked;
  }
}
