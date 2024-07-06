import { Component, OnInit } from '@angular/core';
import { Genre, Movie } from '../models/movie.model';
import { MoviesService } from '../service/movies.service';
import { Router } from '@angular/router';
import { NgForOf } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genre: string = 'all';
  age: string = 'all';

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.moviesService.getMovies(this.genre, this.age).subscribe(movies => {
      this.movies = movies;
      console.log(movies);
    });
  }

  onFilterChange(): void {
    this.fetchMovies();
  }

  onMovieClick(movieId: number): void {
    this.router.navigate(['/movies', movieId]);
  }
}
