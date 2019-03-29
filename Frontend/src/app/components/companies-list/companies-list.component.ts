import { Component, OnInit } from '@angular/core';
import {TimeEntryService} from '../../services/time-entry.service';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../domain/Company';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe((data) =>  this.companies = data);
  }


}
