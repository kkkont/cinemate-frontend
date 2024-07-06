import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../service/movies.service';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genre: string = 'all';
  age: string = 'all';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.moviesService.getMovies(this.genre, this.age)
      .subscribe(movies => this.movies = movies);
  }

  onFilterChange(): void {
    this.fetchMovies();
  }
}
