import { Component, OnInit } from '@angular/core';
import {Genre, Movie} from '../models/movie.model';
import { MoviesService } from '../service/movies.service';
import { GenreService } from '../service/genre.service';
import { Router } from '@angular/router';
import { NgForOf } from "@angular/common";
import { FormsModule } from '@angular/forms';
import {AgeService} from "../service/age.service";

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
  genres: Genre[] = [];
  genre: string = 'all';
  age: string = 'all';
  ageRestrictions: string[] = [];

  constructor(
    private moviesService: MoviesService,
    private genreService: GenreService,
    private ageService: AgeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchGenres();
    this.fetchAgeRestrictions();
    this.fetchMovies();
  }

  fetchGenres(): void {
    this.genreService.getAllGenres().subscribe(
      (data: Genre[]) => {
        this.genres = data;
      },
      (error) => {
        console.error('Error fetching genres: ', error);
      }
    );
  }
  fetchAgeRestrictions(): void {
    this.ageService.getAllAgeRestrictions().subscribe(
      (data: string[]) => {
        this.ageRestrictions = data;
      },
      (error) => {
        console.error('Error fetching age restrictions: ', error);
      }
    );
  }

  fetchMovies(): void {
    this.moviesService.getMovies(this.genre, this.age).subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
        console.log(movies);
      },
      (error) => {
        console.error('Error fetching movies: ', error);
      }
    );
  }

  onFilterChange(): void {
    this.fetchMovies(); // Call fetchMovies when filter changes
  }

  onMovieClick(movieId: number): void {
    this.router.navigate(['/movies', movieId]); // Navigate to movie detail page
  }
}
