import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BookExcerpt } from "../models/bookExcerpt";
import { HomeBooksResponse } from "../models/HomeBooksResponse";
import { BookListItem } from "../models/bookListItem";
import { BookDetails } from "../models/bookDetails";

@Injectable({providedIn:'root'})
export class BookService {

    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/books';

    getActiveExcerpts(){
        return this.http.get<BookExcerpt[]>(`${this.apiUrl}/excerpts`);
    }

    getHomeBooks(){
        return this.http.get<HomeBooksResponse>(`${this.apiUrl}`);
    }

    getBooksList(){
        return this.http.get<BookListItem[]>(`${this.apiUrl}/list`);
    }

    getBookDetails(id:number | null){
        return this.http.get<BookDetails>(`${this.apiUrl}/${id}`);
    }
}