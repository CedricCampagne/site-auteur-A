import { inject, Injectable } from "@angular/core";
import { AuthStateService } from "./service/authState.service";
import { Router } from "@angular/router";

@Injectable({providedIn:'root'})
export class AuthGuard {
    private authStateService = inject(AuthStateService);
    private router = inject(Router);

    canActivate(): boolean {
        if(!this.authStateService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}