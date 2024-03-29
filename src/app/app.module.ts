import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { ScheduleComponent } from './schedule/schedule.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MoviesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
