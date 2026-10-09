import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginRequest } from "../models/loginRequest";
import { LoginResponse } from "../models/loginResponse";
import { Observable } from "rxjs";
import { RegisterRequest } from "../models/registerRequest";
import { RegisterResponse } from "../models/registerResponse";
import { CurrentUserResponse } from "../models/currentUserResponse";

@Injectable({providedIn:'root'})
export class AuthService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/auth';

    login(request: LoginRequest): Observable<LoginResponse>{
        return this.http.post<LoginResponse>(`${this.apiUrl}/login`, request);
    }

    register(request: RegisterRequest): Observable<RegisterResponse>{
        return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, request);
    }

    getCurrentUser(): Observable<CurrentUserResponse>{
        return this.http.get<CurrentUserResponse>(`${this.apiUrl}/me`);
    }

    logout(): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/logout`, null);
    }
}