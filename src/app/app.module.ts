import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BuyticketsComponent } from './buytickets/buytickets.component';
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { CheckoutComponent } from './checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ScheduleComponent,
    BuyticketsComponent,
    SeatselectionComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MoviesComponent,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
