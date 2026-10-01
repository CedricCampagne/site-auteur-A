import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ChronicleCard } from "../models/chronicleCard";



@Injectable({ providedIn:'root'})
export class ChronicleService {

    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/chronicles';

    getHomeChronicles(){
        return this.http.get<ChronicleCard[]>(`${this.apiUrl}/latest`)
    }

}