import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiStore } from '../core/stores/ui.store';
import { UiMessages } from '../shared/ui/ui-messages/ui-messages';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, UiMessages],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  ui = inject(UiStore);

  contactForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required,Validators.minLength(2)]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required,Validators.email],
    }),
    subject: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required,Validators.minLength(5)]
    }),
    message: new FormControl('',{
      nonNullable: true,
      validators: [Validators.required,Validators.minLength(10), Validators.maxLength(2000)]
    })
  });

  async onSubmit() {
  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }

  this.ui.startLoading();

  const data = this.contactForm.getRawValue();

  try {
    const res = await fetch('https://formspree.io/f/mojpwwdj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      this.ui.showSuccess('Votre message a bien été envoyé !');
      this.contactForm.reset();
    } else {
      this.ui.showError('Une erreur est survenue. Veuillez réessayer.');
    }
  } catch {
    this.ui.showError('Une erreur est survenue. Veuillez réessayer.');
  } finally {
    this.ui.stopLoading();
  }
}
}
