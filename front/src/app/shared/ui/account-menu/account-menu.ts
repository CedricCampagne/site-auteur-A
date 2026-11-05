import { Component, inject, signal, HostListener, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthStateService } from '../../../auth/service/authState.service';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-account-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account-menu.html',
  styleUrl: './account-menu.css',
})
export class AccountMenu {
  authStateService = inject(AuthStateService);
  private authService = inject(AuthService);
  private elementRef = inject(ElementRef);

  open = signal(false);

  toggleOpen(): void {
    this.open.update(value => !value);
  }

  close(): void {
    this.open.set(false);
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: ()=> {
        this.authStateService.currentUser.set(null);
        this.close();
      },
      error: (error)=> {
        console.log("Erreur lors de la deconnexion",error);
      }
    });
  }

  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node;

    if (!this.elementRef.nativeElement.contains(target)) {
      this.close();
    }
  }
}
