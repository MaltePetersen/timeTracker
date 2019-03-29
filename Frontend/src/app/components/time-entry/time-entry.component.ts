import {Component, OnInit} from '@angular/core';
import {TimeEntryService} from '../../services/time-entry.service';
import {ITimeEntry, TimeEntry} from '../../domain/TimeEntry';
import {Company} from '../../domain/Company';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import * as moment from 'moment-timezone';
import {UserStorageService} from '../../services/user-storage.service';
import {User} from '../../domain/User';
import {CompanyService} from '../../services/company.service';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.css']
})


export class TimeEntryComponent implements OnInit {
  timeEntry: ITimeEntry;
  workStart: string;
  workEnd: string;
  companies: any;
  timeCompany: Company;
  checked = false;
  startDate = new Date(1990, 0, 1);
  response: any;
  saveSucessfull: boolean;
  user: User;

  onSubmit() {
    this.timeEntry = new TimeEntry();
    this.timeEntry.beginn = moment(this.workStart, 'HH:mm').valueOf();
    this.timeEntry.end = moment(this.workEnd, 'HH:mm').valueOf();
    this.timeEntry.company = this.timeCompany;
    this.timeEntry.user = this.user;
    this.timeService.createTimeEntry(this.timeEntry).subscribe((res: HttpResponse<any>) => (this.successful()),

      (res: HttpErrorResponse) => this.saveSucessfull = false);
  }

  onSelect(company: Company) {
    this.timeCompany = company;
  }

  successful() {
    this.saveSucessfull = true;
    window.location.reload();
  }

  checking() {
    this.checked = !this.checked;
  }

  constructor(private timeService: TimeEntryService, private companyService: CompanyService, private userStorage: UserStorageService
  ) {


  }

  ngOnInit() {
    this.user = this.userStorage.getCurrentUser();
    this.companyService.getAllCompanies().subscribe((data) => this.companies = data);
    this.saveSucessfull = true;
  }

}

