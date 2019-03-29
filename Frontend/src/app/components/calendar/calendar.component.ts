import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  viewDate: Date;
  events = [];

  constructor() {
  }

  ngOnInit() {
    this.viewDate = new Date();
  }

}
