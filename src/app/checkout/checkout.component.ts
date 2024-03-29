import {Component, OnInit} from '@angular/core';
import {Schedule, Seat} from "../models/movie.model";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import { Location } from '@angular/common';
import {UserHistoryService} from "../service/userhistory.service";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})

export class CheckoutComponent implements OnInit {
  schedule!: Schedule;
  selectedSeats!: Seat[];

  constructor(private router: Router, private datePipe: DatePipe, private location: Location, private userHistoryService:UserHistoryService) {
  }

  ngOnInit(): void {
    this.schedule = history.state.schedule;
    this.selectedSeats = history.state.selectedSeats;
  }
  formatDate(dateTime: string): string {
    return <string>this.datePipe.transform(dateTime, 'medium');
  }
  goBack(): void {
    this.location.back();
  }

  onCheckout(): void {
    this.userHistoryService.postUserHistory(this.schedule).subscribe(
      response => {
        console.log('User history posted successfully', response);
        this.router.navigate([''])
      },
      error => {
        console.error('Error posting user history', error);
      }
    );
  }
}

