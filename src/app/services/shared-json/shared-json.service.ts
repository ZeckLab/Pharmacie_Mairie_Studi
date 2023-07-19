import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SharedJsonService {

    private jsonData:any; // Variable to store JSON data

    constructor(private http: HttpClient) { }

    // Method to retrieve JSON data
    getData(): Observable<any> {

        // If the data has already been retrieved, send the stored data directly
        if (this.jsonData) {
            return new Observable((observer) => {
                observer.next(this.jsonData);
                observer.complete();
            });
        } else {
            // make an HTTP request to retrieve the data from the JSON file
            return this.http.get<any>('../../assets/data/pharmacy.json')
        }
    }
}