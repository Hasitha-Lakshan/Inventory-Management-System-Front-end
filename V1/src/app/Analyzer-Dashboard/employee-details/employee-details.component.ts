import { Component, OnInit } from '@angular/core';

import { Employees } from './employees';
import { EmployeeDetailsService } from '../../services/employee-details.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  userID: number;
  firstName: string;
  searchText: string;
  tool = true;
  count: number;
  lstEmp: Employees[];
  employee = []
  filterId = [];
  filterIdUI = [];

  constructor(private service: EmployeeDetailsService) { }

  ngOnInit(): void {

    let resp = this.service.get_employees();
    resp.subscribe(data => {
      this.lstEmp = data;
      this.employee = data;
    })
  }

  search() {

    this.filterId = this.employee;
    var matchData = []
    this.tool = true;

    this.filterId.forEach(data => {
      this.tool = true;

      var n = data.userID.toString().startsWith(this.searchText)

      if (n) {
        this.count = this.count + 1;
        matchData.push(data);
      }
    })

    if (this.count == 0) {
      this.tool = false;
    }

    this.count = 0;
    this.lstEmp = matchData;
  }

}
