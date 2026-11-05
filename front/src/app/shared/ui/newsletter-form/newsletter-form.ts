import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-newsletter-form',
  imports: [ReactiveFormsModule],
  templateUrl: './newsletter-form.html',
  styleUrl: './newsletter-form.css',
})
export class NewsletterForm {

  private BREVO_URL = "https://80e02d47.sibforms.com/serve/MUIFAOQ47ZzRVpAzUkO0U2SxOGKphWd5mZu7kVjAAjafths-ri1og1sVZtjpC-wB15STzgYSznTegaCd9hYGavGTdtTdP-T1sTp4FS6ON_4Sd3L9EllEneFpaNHNNs8Glj6-IeyM2f5ZSIq6YT97ZxtQwvPTfSCVQrKWHTxTGcCV6qRumFZn1HR6IomF3MMNrK5UX1fRoDCdDoELcg==";
  newsletterForm = new FormGroup({
    email: new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    })
  });

  handleSubmit() {
    if(this.newsletterForm.invalid) return;
  
    const email = this.newsletterForm.controls.email.value;

    // 2. Construire le FormData attendu par Brevo
    const formData = new FormData();

    formData.append('EMAIL', email);
    formData.append('email_address_check', '');
    formData.append('locale', 'fr');
    formData.append('html_type', 'simple');

    // 3. Envoyer à Brevo
    fetch(this.BREVO_URL, {
    method: 'POST',
    body: formData,
  });

  this.newsletterForm.reset();
  }
}
