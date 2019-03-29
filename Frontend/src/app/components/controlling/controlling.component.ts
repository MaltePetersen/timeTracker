import {Component, OnInit} from '@angular/core';
import {ControllingService} from '../../services/controlling.service';
import {ControllingView} from '../../domain/ControllingView';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../domain/Company';
import {UserService} from '../../services/user.service';
import {User} from '../../domain/User';
import {forEach} from '@angular/router/src/utils/collection';
import {ControllingDto} from '../../domain/ControllingDto';

export interface AllTimeEntries {
  employee: string;
  hours: number;
}

@Component({
  selector: 'app-controlling',
  templateUrl: './controlling.component.html',
  styleUrls: ['./controlling.component.css']
})
export class ControllingComponent implements OnInit {
  displayedColumns = ['employee', 'hours'];
  timeEntries: AllTimeEntries[] = [
    {employee: 'Beach ball', hours: 4},
    {employee: 'Towel', hours: 5},
    {employee: 'Frisbee', hours: 2},
    {employee: 'Sunscreen', hours: 4},
    {employee: 'Cooler', hours: 25},
    {employee: 'Swim suit', hours: 15},
  ];
  private controllingView: ControllingDto[];
  private companyView: Company[];
  private userView: User[];

  constructor(private controllingService: ControllingService, private companyService: CompanyService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getControllingView();
  }

  /** Gets the total hours of all transactions. */
  getTotalCost() {
    return this.timeEntries.map(t => t.hours).reduce((acc, value) => acc + value, 0);
  }

  getControllingView() {
    this.controllingService.getControllingData().subscribe((data) => this.getAllCompanies(data));
  }

  getAllCompanies(controllView) {
    this.controllingView = controllView;
    this.companyService.getAllCompanies().subscribe((data) => this.getAllUsers(data));
  }

  getAllUsers(companyView) {
    this.companyView = companyView;
    this.userService.getAllUsers().subscribe((data) => this.userView = data);
  }


}
