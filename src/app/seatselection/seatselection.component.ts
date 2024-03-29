import {Component} from '@angular/core';
import {Schedule, Seat} from "../models/movie.model";

import {SeatsService} from "../service/seats.service";

@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrl: './seatselection.component.css'
})
export class SeatselectionComponent {
  schedule!: Schedule;
  numberOfTickets!: number;
  seats: Seat[] = [];
  filteredSeats: Seat[][] = [];

  constructor(private seatsService: SeatsService) {
  }

  ngOnInit(): void {
    this.schedule = history.state.schedule;
    this.numberOfTickets = history.state.numberOfTickets;
    this.seatsService.getSeanceSeats(this.schedule.id, this.numberOfTickets).subscribe(seats => {
      this.seats = seats;
      this.filterSeatsByRow();
    });
 }
  private filterSeatsByRow(): void {
    for (let i = 0; i < 8; i++) { // Assuming there are 8 rows
      this.filteredSeats[i] = this.seats.filter(seat => seat.seatRow === i + 1);
    }
  }


  selectSeat(seat: Seat): void {
    this.seats.forEach(s => s.selected = false);
    this.seats.forEach(s => s.recommended = false);
    if (seat.occupied) {
      return;
    }

    const nextSeat = this.seats.find(s => s.seatRow === seat.seatRow && s.seatNumber === seat.seatNumber + 1);
    const nextNextSeat = this.seats.find(s => s.seatRow === seat.seatRow && s.seatNumber === seat.seatNumber + 2);

    if (nextSeat && nextNextSeat && !nextSeat.occupied && !nextNextSeat.occupied) {

      seat.selected = true;
      nextSeat.selected = true;
      nextNextSeat.selected = true;
    } else {
      return
    }
  }

}
