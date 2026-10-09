import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UiStore } from '../../core/stores/ui.store';
import { AuthStateService } from '../service/authState.service';
import { UiMessages } from '../../shared/ui/ui-messages/ui-messages';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, UiMessages],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private authStateService = inject(AuthStateService);

  router = inject(Router);
  ui = inject(UiStore);

  loginForm = new FormGroup({
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
    })
  });

  onSubmit(){
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.ui.clearMessage()
    this.ui.startLoading();

    const credentials = this.loginForm.getRawValue();

    this.authService.login(credentials).subscribe({
      next: (res) => {
        setTimeout(() => {
          this.ui.stopLoading();
          this.ui.showSuccess('Connexion autorisée!');
        }, 800);

        setTimeout(() => {
          this.authStateService.currentUser.set(res);
          this.ui.clearMessage();
          this.router.navigate(['']);
        }, 1400);
      },
      error: (err) => {
        setTimeout(() => {
          this.ui.stopLoading();
        }, 800);

        setTimeout(() => {
          this.ui.showError('Email ou mot de passe incorrect');
        }, 1400);
      },
    });
  }
}
