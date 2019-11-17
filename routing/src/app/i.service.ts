import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IService {
  public commu:Subject<any>;
  constructor() {
    this.commu = new Subject<any>();
  }
  public getData(data){
    this.commu.next("o stamp "+ data);
  }
}
