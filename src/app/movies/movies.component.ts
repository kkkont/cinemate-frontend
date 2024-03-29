import { Component, OnInit} from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../service/movies.service';
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

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
      console.log(movies)
    });
  }
}
