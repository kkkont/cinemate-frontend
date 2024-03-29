import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Schedule, Seat} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  private apiUrl = 'http://localhost:8080/cinemate/seats'; // Adjust the URL as necessary

  constructor(private http: HttpClient) { }

  getSeanceSeats(scheduleID: number | undefined,numberOfTickets: number | undefined): Observable<Seat[]> {
    return this.http.get<any[]>(`${this.apiUrl}?scheduleID=${scheduleID}&numberOfTickets=${numberOfTickets}`);
  }

}
