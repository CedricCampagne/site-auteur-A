import { inject, Injectable } from "@angular/core";
import { AuthStateService } from "../service/authState.service";
import { CanActivate, Router } from "@angular/router";

@Injectable({providedIn:'root'})
export class AdminGuard implements CanActivate {
    private authService = inject(AuthStateService);
    private router = inject(Router);

    canActivate(): boolean {
        const user = this.authService.currentUser();

        if(!user) {
            this.router.navigate(['/login']);
        }

        if (user?.role !== 'ADMIN') {
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}