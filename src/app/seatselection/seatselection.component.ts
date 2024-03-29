import { Component } from '@angular/core';
import {Schedule} from "../models/movie.model";

@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrl: './seatselection.component.css'
})
export class SeatselectionComponent {
  schedule!:Schedule;
  numberOfTickets!: number;

  ngOnInit(): void {
    this.schedule = history.state.schedule;
    this.numberOfTickets = history.state.numberOfTickets;
    console.log(this.schedule, this.numberOfTickets); // Log the schedule and number of tickets to verify they're passed correctly
  }
}
