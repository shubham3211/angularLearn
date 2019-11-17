import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  oddNums = this.numbers.filter((num) => num%2!=0);
  evenNums = this.numbers.filter(num => num%2==0);
  ngOnInit() {
  }
  odd=true;
  oddEven(){
    this.odd = !this.odd;
  }
  mycolor="red";
}
