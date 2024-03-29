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
export interface Genre {
  id: number;
  name: string;
  movies: Movie[];
}

export interface Schedule{
  id: number;
  movie: Movie;
  dateTime: string;
  language: string;
  subtitles: string;
  seats: Seat[];
}

export interface Seat {
  id: number;
  seatRow: number;
  seatNumber: number;
  occupied: boolean;
  recommended: boolean;
  selected: boolean;
  schedule: Schedule;
}

export interface UserHistory{
  schedule: Schedule;
}
