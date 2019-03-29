import {Component, Input, OnInit} from '@angular/core';
import {TimeEntry} from '../../../domain/TimeEntry';
import {TimeEntryService} from '../../../services/time-entry.service';
import {TimeEntrybyUserDTO} from '../time-list.component';

@Component({
  selector: 'app-time-list-child-delete',
  templateUrl: './time-list-child-delete.component.html',
  styleUrls: ['./time-list-child-delete.component.css']
})
export class TimeListChildDeleteComponent implements OnInit {

  @Input() timeEntry: TimeEntrybyUserDTO;

  constructor(private timeEntryService: TimeEntryService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.timeEntryService.deleteTimeEntry(this.timeEntry.timeEntryId).subscribe((data) => window.location.reload()
    );
  }
}
