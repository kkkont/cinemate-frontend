import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  private baseUrl = 'http://localhost:8080/cinemate/rated';

  constructor(private http: HttpClient) { }

  getAllAgeRestrictions(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl);
  }
}
