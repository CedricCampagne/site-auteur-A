import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { AdminCommentResponse } from "../models/adminCommentResponse";
import { AdminCommentUpdateRequest } from "../models/adminCommentUpdateRequest";




@Injectable({providedIn:'root'})
export class AdminCommentService {

    private http = inject(HttpClient);
    private apiUrl = "http://localhost:8080/api/admin/comments"

    getAll(): Observable<AdminCommentResponse[]>{
        return this.http.get<AdminCommentResponse[]>(`${this.apiUrl}`);
    }

    getById(id: number): Observable<AdminCommentResponse>{
            return this.http.get<AdminCommentResponse>(`${this.apiUrl}/${id}`);
    }

    update(payload: AdminCommentUpdateRequest, id: number): Observable<AdminCommentUpdateRequest>{
            return this.http.patch<AdminCommentUpdateRequest>(`${this.apiUrl}/${id}`, payload);
    }

    delete(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    toggleStatus(id:number): Observable<AdminCommentResponse>{
        return this.http.patch<AdminCommentResponse>(`${this.apiUrl}/${id}/toggle`, {});
    }
}