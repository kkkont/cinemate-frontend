import {Component} from '@angular/core';
import {Schedule, Seat} from "../models/movie.model";
import {Location} from "@angular/common";
import {SeatsService} from "../service/seats.service";
import {Router} from "@angular/router";

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
  selectedSeats : Seat[] = [];
  selectedSeatsBoolean = false;

  constructor(private seatsService: SeatsService, private router:Router, private location: Location) {
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
    for (let i = 0; i < 8; i++) {
      this.filteredSeats[i] = this.seats.filter(seat => seat.seatRow === i + 1);
    }
  }


  selectSeat(seat: Seat): void {
    this.selectedSeatsBoolean = false;
    this.selectedSeats = [];

    this.seats.forEach(s => {
      s.selected = false;
      s.recommended = false;
    });

    if (seat.occupied) {
      return;
    }
    let allowedSeat = 9 - this.numberOfTickets;
    if(seat.seatNumber > allowedSeat) return;

    let startSeat = seat;
    let endSeat = seat;

    for (let i = 1; i < this.numberOfTickets; i++) {
      const nextSeat = this.seats.find(s => s.seatRow === seat.seatRow && s.seatNumber === seat.seatNumber + i);
      if (nextSeat && !nextSeat.occupied) {
        endSeat = nextSeat;
      } else {
        break;
      }
    }

    this.seats.forEach(s => {
      if (s.seatRow === startSeat.seatRow && s.seatNumber >= startSeat.seatNumber && s.seatNumber <= endSeat.seatNumber) {
        s.selected = true;
        this.selectedSeats.push(s);
      }
    });

    this.selectedSeatsBoolean = this.seats.some(s => s.selected);
  }

  checkOut(schedule: Schedule): void {
    this.router.navigate(['/checkout'], { state: { schedule: schedule, selectedSeats:this.selectedSeats} });
  }

  goBack() {
    this.location.back();
  }
}
