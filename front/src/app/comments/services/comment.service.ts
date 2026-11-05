import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CommentCreateResponse } from "../models/commentCreateResponse";
import { CommentCreateRequest } from "../models/commentCreateRequest";

import { environment } from "../../../environments/environment";
@Injectable({providedIn:'root'})
export class CommentService {

    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/comments`;

    create(request: CommentCreateRequest ): Observable<CommentCreateResponse>{
        return this.http.post<CommentCreateResponse>(`${this.apiUrl}`, request);
    }
}