import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CommentCreateResponse } from "../models/commentCreateResponse";
import { CommentCreateRequest } from "../models/commentCreateRequest";

@Injectable({providedIn:'root'})
export class CommentService {

    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/comments';

    create(request: CommentCreateRequest ): Observable<CommentCreateResponse>{
        return this.http.post<CommentCreateResponse>(`${this.apiUrl}`, request);
    }
}