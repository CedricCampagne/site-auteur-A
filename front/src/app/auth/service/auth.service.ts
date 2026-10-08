import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginRequest } from "../models/loginRequest";
import { LoginResponse } from "../models/loginResponse";
import { Observable } from "rxjs";
import { RegisterRequest } from "../models/registerRequest";
import { RegisterResponse } from "../models/registerResponse";

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
    
}