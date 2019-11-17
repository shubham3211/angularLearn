import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './weatherApi.service';
import { BcdServiceService } from './bcd-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movieApp';
  weatherData = {};
  isFetching = true;
  constructor(private bcdSer: BcdServiceService, private weatherService: WeatherApiService){}
  getData(){
    this.weatherService.getWeatherData();
    this.isFetching = true;
  }
  ngOnInit(){
    this.weatherService.weatherData.subscribe((data) => {
      this.weatherData = data;
      console.log(data);
      this.isFetching = false;
    })
    this.bcdSer.printName();
  }
}
