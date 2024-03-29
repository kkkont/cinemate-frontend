import {Component, OnInit} from '@angular/core';
import {Schedule} from "../models/movie.model";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";


@Component({
  selector: 'app-buytickets',
  templateUrl: './buytickets.component.html',
  styleUrl: './buytickets.component.css'
})
export class BuyticketsComponent implements OnInit {
  schedule!: Schedule;
  numberOfTickets = 1; // Start with 1 ticket

  constructor(private datePipe: DatePipe,private router:Router) { }

  ngOnInit(): void {
    this.schedule = history.state.schedule;
    console.log(this.schedule); // Log the schedule to verify it's passed correctly
  }

  formatDateTime(dateTime: string): string {
    return <string>this.datePipe.transform(dateTime, 'medium');
  }

  incrementTickets(): void {
    if (this.numberOfTickets < 6) {
      this.numberOfTickets++;
    }
  }

  decrementTickets(): void {
    if (this.numberOfTickets > 1) {
      this.numberOfTickets--;
    }
  }

  proceedToSeatSelection(schedule: any, numberOfTickets: number): void {
    this.router.navigate(['/seat-selection'], { state: { schedule: schedule, numberOfTickets: numberOfTickets } });
  }
}
