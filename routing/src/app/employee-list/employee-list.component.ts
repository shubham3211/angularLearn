import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private empService: EmployeeService) { }
  employees=[];
  keys=[];
  ngOnInit() {
    this.employees = this.empService.getEmployees();
    for(let empKey in this.employees[0]){
      this.keys.push(empKey.toUpperCase())
    }
  }

}
