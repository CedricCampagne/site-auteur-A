import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdminUserResponse } from "../models/adminUserResponse";
import { AdminUserUpdateRequest } from "../models/adminUserUpdateRequest";

@Injectable({providedIn:'root'})
export class AdminUserService {

    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/admin/user';

    getAll(): Observable<AdminUserResponse[]>{
        return this.http.get<AdminUserResponse[]>(`${this.apiUrl}`);
    }

    getById(id: number): Observable<AdminUserResponse>{
        return this.http.get<AdminUserResponse>(`${this.apiUrl}/${id}`)
    }

    delete(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    toggleStatus(id: number): Observable<AdminUserResponse>{
        return this.http.put<AdminUserResponse>(`${this.apiUrl}/${id}/toggle`, {});
    }

    update(payload: AdminUserUpdateRequest, id:number): Observable<AdminUserResponse>{
        return this.http.put<AdminUserResponse>(`${this.apiUrl}/${id}`, payload);
    }
}