import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UiStore } from '../../core/stores/ui.store';
import { AuthStateService } from '../service/authState.service';
import { forkJoin, timer } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
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

    this.ui.startLoading();

    const credentials = this.loginForm.getRawValue();

    forkJoin([this.authService.login(credentials), timer(1500)]).subscribe({
      next : ([user])=>{
        this.ui.stopLoading();
        this.authStateService.currentUser.set(user);
        this.ui.showSuccess('Connexion autorisée !');
        this.router.navigate(['']);
      }, error : (err) =>{
        this.ui.stopLoading();
        this.ui.showError(err.error?.message ?? 'Email ou mot de passe incorrect');
      }
    });
  }
}
