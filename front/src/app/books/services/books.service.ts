import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BookExcerpt } from "../models/bookExcerpt";
import { HomeBooksResponse } from "../models/HomeBooksResponse";

@Injectable({providedIn:'root'})
export class BookService {

    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/books';

    getActiveExcerpts(){
        return this.http.get<BookExcerpt[]>(`${this.apiUrl}/excerpts`);
    }

    getHomeBooks(){
        return  this.http.get<HomeBooksResponse>(`${this.apiUrl}`);
    }
}