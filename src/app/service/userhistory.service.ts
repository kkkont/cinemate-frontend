import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Schedule, UserHistory} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class UserHistoryService {
  constructor(private http: HttpClient) { }

  postUserHistory(schedule: Schedule) {
    const url = 'http://localhost:8080/cinemate/userHistory';
    const userHistory = { schedule: schedule };
    return this.http.post<UserHistory>(url, userHistory);
  }
}
