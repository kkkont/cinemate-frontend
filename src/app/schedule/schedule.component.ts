// schedule.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ScheduleService } from '../service/schedule.service';
import { DatePipe } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [DatePipe] // Add DatePipe to the providers array
})
export class ScheduleComponent implements OnInit {
  @Input() movieId: number | undefined;
  schedules: any[] = [];

  constructor(private scheduleService: ScheduleService, private datePipe: DatePipe,private router: Router) { }

  ngOnInit(): void {
    this.scheduleService.getScheduleByMovieId(this.movieId).subscribe(schedules => {
      this.schedules = schedules;
    });
  }

  formatDate(dateTime: string): string {
    return <string>this.datePipe.transform(dateTime, 'medium');
  }
  buyTickets(schedule: any): void {
    this.router.navigate(['/buy-tickets'], { state: { schedule: schedule } });
  }
}
