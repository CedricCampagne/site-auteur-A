import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { AdminChronicleResponse } from "../models/adminChronicleResponse";
import { AdminChronicleCreateRequest } from "../models/adminChronicleCreateRequest";
import { AdminChronicleUpdateRequest } from "../models/adminChronicleUpdateRequest";
import { AdminChronicleUpdateResponse } from "../models/adminChronivleUpdateResponse";


@Injectable({providedIn:'root'})
export class AdminChronicleService {

    private http = inject(HttpClient);
    private apiUrl = "http://localhost:8080/api/admin/chronicles"

    getAll(): Observable<AdminChronicleResponse[]>{
        return this.http.get<AdminChronicleResponse[]>(`${this.apiUrl}`);
    }

    getById(id: number): Observable<AdminChronicleUpdateResponse>{
        return this.http.get<AdminChronicleUpdateResponse>(`${this.apiUrl}/${id}`);
    }

    create(payload: AdminChronicleCreateRequest): Observable<AdminChronicleResponse> {
        return this.http.post<AdminChronicleResponse>(this.apiUrl, payload);
    }

    update(payload: AdminChronicleUpdateRequest, id: number): Observable<AdminChronicleUpdateResponse>{
        return this.http.put<AdminChronicleUpdateResponse>(`${this.apiUrl}/${id}`, payload);
    }

    delete(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    toggle(id: number): Observable<AdminChronicleResponse>{
        return this.http.patch<AdminChronicleResponse>(`${this.apiUrl}/${id}/toggle`, {});
    }
}