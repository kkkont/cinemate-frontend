import { Component } from '@angular/core';
import {Movie} from "../models/movie.model";
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../service/movies.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movieId!: number;
  movies: Movie[] = [];
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute,private moviesService:MoviesService) {}

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.movie = this.movies.find(m => m.id === this.movieId) ;
      console.log(this.movie);
    });
    // Fetch movie data based on this.movieId...
  }
}
