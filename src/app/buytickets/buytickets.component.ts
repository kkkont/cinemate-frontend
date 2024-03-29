import {Component, OnInit} from '@angular/core';
import {Schedule} from "../models/movie.model";
import {DatePipe, Location} from "@angular/common";
import {Router} from "@angular/router";


@Component({
  selector: 'app-buytickets',
  templateUrl: './buytickets.component.html',
  styleUrl: './buytickets.component.css'
})
export class BuyticketsComponent implements OnInit {
  schedule!: Schedule;
  numberOfTickets = 1;

  constructor(private datePipe: DatePipe,private router:Router,private location: Location) { }

  ngOnInit(): void {
    this.schedule = history.state.schedule;
    console.log(this.schedule);
  }

  formatDateTime(dateTime: string): string {
    return <string>this.datePipe.transform(dateTime, 'medium');
  }

  incrementTickets(): void {
    if (this.numberOfTickets < 4) {
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

  goBack() {
    this.location.back();
  }
}
