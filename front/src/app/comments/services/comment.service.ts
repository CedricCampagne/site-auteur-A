import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})
export class CommentService {

    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/comments';

    
}