import { Injectable, signal } from "@angular/core";
import { CurrentUserResponse } from "../models/currentUserResponse";


@Injectable({providedIn:'root'})
export class AuthStateService {
    currentUser = signal<CurrentUserResponse | null>(null);

    isLoggedIn() {
        return this.currentUser() !== null;
    }

    logout(): void {
        this.currentUser.set(null);
    }
}