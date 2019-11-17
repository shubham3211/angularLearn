import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BcdServiceService {

  constructor() { }

  public printName(){
    console.log('Shubham Kumar Singh, Mait')
  }
}
