import {Component, OnInit} from '@angular/core';
import {TimeEntryService} from '../../services/time-entry.service';
import {TimeEntry} from '../../domain/TimeEntry';
import {Moment} from 'moment';
import * as moment from 'moment-timezone';

export class TimeEntrybyUserDTO {
  timeEntryId: number;
  workStart: number;
  workEnd: number;
  timeWorked: number;
  companyName: string;

  constructor(timeEntryId: number, workStart: number, workEnd: number, timeWorked: number, companyName: string) {
    this.timeEntryId = timeEntryId;
    this.workStart = workStart;
    this.workEnd = workEnd;
    this.timeWorked = timeWorked;
    this.companyName = companyName;
  }
}



@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css']
})


export class TimeListComponent implements OnInit {
  timeEntryDTO: TimeEntrybyUserDTO[];
  showFiller = false;
  selectedTimeEntry: TimeEntrybyUserDTO;
  constructor(private timeEntryService: TimeEntryService) {
  }

  ngOnInit() {
    this.timeEntryService.getAllTimeEntries().subscribe((data) =>   this.timeEntryDTO = data);
    this.selectedTimeEntry = null;
  }

  onChange(timeEntry: TimeEntrybyUserDTO) {
    this.selectedTimeEntry = timeEntry;
  }

  momentMethod(time: number): any {
    return moment(time).format('DD-MM-YYYY HH:mm');
  }
  timeWorkedConverter(timeWorkedInMilliSec): number {
    return   timeWorkedInMilliSec / 3600000;

  }
}

