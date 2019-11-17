import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    {empno:1231,name:'Thangaraj',age:21,salary:12345.11},
    {empno:1232,name:'Sindhu',age:22,salary:34512.22},
    {empno:1233,name:'Snigdha',age:23,salary:12343.33},
    {empno:1234,name:'Bhagya',age:24,salary:12344.44},
    {empno:1235,name:'Bhavya',age:25,salary:12345.55},
    {empno:1236,name:'Pavana',age:26,salary:12346.66},
    {empno:1237,name:'Seema',age:27,salary:12347.77},
    {empno:1238,name:'Karthik',age:28,salary:12348.88},
    {empno:1239,name:'Prashantha',age:29,salary:12349.99},
    {empno:1240,name:'Manoj',age:30,salary:12340.00}
  ];
  constructor() { }
  public getEmployees(){
    return this.employees;
  }
  public getEmployeeByEmpno(empno: number){
    for(let i=0;i<this.employees.length;i++){
      if(this.employees[i].empno == empno){
        return this.employees[i];
      }
    }
  }
}
