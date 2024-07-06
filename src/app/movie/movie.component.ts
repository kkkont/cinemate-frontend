import { Component, OnInit } from '@angular/core';
import { Movie } from "../models/movie.model";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../service/movies.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieId!: number;
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchMovie();
  }

  fetchMovie(): void {
    this.moviesService.getMovieById(this.movieId).subscribe(movie => {
      this.movie = movie;
      console.log(this.movie);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
