import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit, AfterViewInit {
  @ViewChild('city', {static: true}) city:ElementRef;
  constructor() { }
  customValidation  = false;
  cityName = ''
  @ViewChild('latLongCtrl', {static: true})latLong:ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.city.nativeElement.focus();
  }

  onSubmit(form:NgForm){
    console.log(this.latLong)
    console.log(form)
  }

  printChange(event){
    if(this.cityName.length >= 4){
      this.customValidation = true;
    }else{
      this.customValidation = false;
    }
  }
}
