import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./movies/movies.component";
import {MovieComponent} from "./movie/movie.component";
import {BuyticketsComponent} from "./buytickets/buytickets.component";
import {SeatselectionComponent} from "./seatselection/seatselection.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [{ path: '', component: MoviesComponent },
  {path:'movies/:id',component: MovieComponent},
  {path:'buy-tickets',component: BuyticketsComponent},
  {path:'seat-selection', component:SeatselectionComponent},
  {path:'checkout', component:CheckoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
