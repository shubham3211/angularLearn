import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  person={
    name: 'shubham',
    age: {
      'umar': 'u1'
    }
  }
  num = 2345.5678;
  money=22
  per=25
  dt = new Date();
  name="shubhamkumarsingh"
  constructor(private apiser: ApiService) { }
  
  ngOnInit() {
    this.apiser.getData();
    this.apiser.weather.subscribe((data) => {
      console.log("shubham" + JSON.stringify(data));
    })
    this.apiser.testFunc();
  }

}
