import {Component, Inject, Input, OnInit} from '@angular/core';
import {TimeEntry} from '../../../domain/TimeEntry';
import {TimeEntryService} from '../../../services/time-entry.service';
import {CompanyService} from '../../../services/company.service';
import {Company} from '../../../domain/Company';
import * as moment from 'moment-timezone';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {TimeEntrybyUserDTO} from '../time-list.component';
import {UserStorageService} from '../../../services/user-storage.service';
import {User} from '../../../domain/User';

@Component({
  selector: 'app-time-entry-change',
  templateUrl: './time-entry-change.component.html',
  styleUrls: ['./time-entry-change.component.css']
})
export class TimeEntryChangeComponent implements OnInit {

  @Input() timeEntryDTO: TimeEntrybyUserDTO;
  timeEntry: TimeEntry;
  saveSucessfull: boolean;
  companies: any;
  timeCompany: Company;
  workStart: string;
  workEnd: string;

  constructor(private timeService: TimeEntryService, private companyService: CompanyService, public userStorage: UserStorageService) { }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe((data) => this.companies = data);
    this.saveSucessfull = true;

  }
  succesfull() {
    this.saveSucessfull = true;
    window.location.reload();
  }
  onSelect(company: Company) {
    this.timeCompany = company;
  }
  // TODO add the Patch Befehl
  onSubmit() {
    this.timeEntry = new TimeEntry();
    this.timeEntry.id = this.timeEntryDTO.timeEntryId;
    this.timeEntry.beginn = moment(this.workStart, 'HH:mm').valueOf();
    this.timeEntry.end = moment(this.workEnd, 'HH:mm').valueOf();
    this.timeEntry.company = this.timeCompany;
    this.timeEntry.user = this.userStorage.getCurrentUser();
    this.timeService.changeTimeEntry(this.timeEntry.id, this.timeEntry).subscribe((res: HttpResponse<any>) => (this.succesfull()),

      (res: HttpErrorResponse) => this.saveSucessfull = false);
  }


}
