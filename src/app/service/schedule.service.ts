import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Schedule} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = 'http://localhost:8080/cinemate/schedule_movie'; // Adjust the URL as necessary

  constructor(private http: HttpClient) { }

  getScheduleByMovieId(movieId: number | undefined): Observable<Schedule[]> {
    return this.http.get<any[]>(`${this.apiUrl}?movieId=${movieId}`);
  }
}
