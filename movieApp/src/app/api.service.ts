import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { BcdServiceService } from './bcd-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  weather:Subject<any> = new Subject<any>();
  constructor(private http:HttpClient, private bcdSer: BcdServiceService){}

  public getData(){
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e1b3c0752cce89262f426cb3a0b1f483')
      .subscribe(data => this.weather.next(data))
  }

  public testFunc(){
    this.bcdSer.printName();
  }
}