import { inject } from "@angular/core";
import { AuthService } from "./service/auth.service";
import { AuthStateService } from "./service/authState.service";
import { catchError, firstValueFrom, tap, of } from "rxjs";




export function authInitializer(){
    const authService = inject(AuthService);
    const authStateService = inject(AuthStateService);

    return firstValueFrom(
        authService.getCurrentUser().pipe(
            tap((user) => {
            authStateService.currentUser.set(user);
            }),
            catchError(() => {
            authStateService.currentUser.set(null);
            return of(null);
            })
        )
    );
}