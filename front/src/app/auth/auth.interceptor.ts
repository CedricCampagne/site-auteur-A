import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { AuthStateService } from "./service/authState.service";
import { Router } from '@angular/router';
import { UiStore } from '../core/stores/ui.store';
import { catchError, throwError } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (req, next) => {

    const authState = inject(AuthStateService);
    const router = inject(Router);
    const ui = inject(UiStore)   ;

    const cloned = req.clone({
        withCredentials: true
    });

    return next(cloned).pipe(
        catchError((error: HttpErrorResponse) =>{
            if(error.status === 401 && authState.isLoggedIn()) {
                authState.logout();
                ui.showError("Votre session a expirée. Veuillez vous reconnecter.");
                router.navigate(["/login"]);
            }

            return throwError(()=> error);
        })
    );
}