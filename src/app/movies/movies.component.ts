import { Component, OnInit} from '@angular/core';
import {Genre, Movie} from '../models/movie.model';
import { MoviesService } from '../service/movies.service';
import { Router } from '@angular/router';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService, private router:Router) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
      console.log(movies)
    });
  }
  onMovieClick(movieId: number): void {
    this.router.navigate(['/movies', movieId]);
  }
}
