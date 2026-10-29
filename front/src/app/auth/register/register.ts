import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { UiMessages } from '../../shared/ui/ui-messages/ui-messages';
import { AuthService } from '../service/auth.service';
import { AuthStateService } from '../service/authState.service';
import { UiStore } from '../../core/stores/ui.store';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService = inject(AuthService);
  private authStateService = inject(AuthStateService);

  router = inject(Router);
  ui = inject(UiStore);

  registerForm = new FormGroup({
    username: new FormControl("", {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]
    }),
    email: new FormControl("",{
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl("", {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(200)
      ]
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  },
  {
    validators: passwordsMatch
  }
  );

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.ui.clearMessage()
    this.ui.startLoading();

    const { username, email, password} = this.registerForm.getRawValue();
    const credentials = { username, email, password};

    this.authService.register(credentials).subscribe({
      next: (res) => {
        this.ui.stopLoading().then(()=>{
          this.ui.showSuccess('Inscription réussie !');

          setTimeout(() => {
            this.ui.clearMessage();
            this.router.navigate(['/login']);
          }, 1500);
        });
      },
      error: (err) => {
        this.ui.stopLoading().then(()=>{
          this.ui.showError('Email ou mot de passe incorrect');
        });
      },
    });
  }
}

  function passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword
      ? null
      : { passwordsMismatch: true };
  }
