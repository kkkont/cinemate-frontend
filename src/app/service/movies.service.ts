import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl = 'http://localhost:8080/cinemate';

  constructor(private http: HttpClient) {}

  getMovies(genre: string, age: string): Observable<Movie[]> {
    let params = new HttpParams();

    if (genre !== 'all') {
      params = params.append('genre', genre);
    }

    if (age !== 'all') {
      params = params.append('age', age);
    }

    return this.http.get<Movie[]>(`${this.baseUrl}/filter`, { params });
  }

  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movies/${movieId}`);
  }

}
