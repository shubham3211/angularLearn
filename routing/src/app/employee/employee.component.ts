import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empSer:EmployeeService, private route:ActivatedRoute) { }
  employee;
  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.employee = this.empSer.getEmployeeByEmpno(+params['id'])
    })
  }

}
