import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = './cards.json'; // path to the JSON file

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

