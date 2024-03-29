export interface Movie {
  id: number;
  movieName: string;
  runningTimeInMinutes: number;
  description: string;
  ageRestriction: string;
  releaseYear: number;
  photo: string;
  genres: Genre[];
  genreNames:string;
}
interface Genre {
  id: number;
  name: string;
  movies: Movie[];
}
