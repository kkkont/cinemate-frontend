import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./movies/movies.component";
import {MovieComponent} from "./movie/movie.component";

const routes: Routes = [{ path: '', component: MoviesComponent },
  {path:'movies/:id',component: MovieComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
