import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ChronicleCard } from "../models/chronicleCard";
import { ChronicleListItem } from "../models/chronicleListItem";
import { ChronicleDetails } from "../models/chronicleDetails";
import { CommentListItem } from "../../comments/models/commentListItem";



@Injectable({ providedIn:'root'})
export class ChronicleService {

    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/chronicles';

    getHomeChronicles(){
        return this.http.get<ChronicleCard[]>(`${this.apiUrl}/latest`)
    }

    getListChronicles(){
        return this.http.get<ChronicleListItem[]>(`${this.apiUrl}/list`);
    }

    getChronicle(id:number | null){
        console.log(`${this.apiUrl}/${id}`);
        return this.http.get<ChronicleDetails>(`${this.apiUrl}/${id}`);
    }

    getChronicleComments(id: number | null) {
        return this.http.get<CommentListItem[]>(`${this.apiUrl}/${id}/comments`);
    }

}