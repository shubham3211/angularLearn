import { Component, OnInit } from '@angular/core';
import {MService} from '../m.service'
import {IService} from '../i.service';
@Component({
  selector: 'app-ou1',
  templateUrl: './ou1.component.html',
  styleUrls: ['./ou1.component.css']
})
export class Ou1Component implements OnInit {

  constructor(private m: MService, private iser: IService) { }

  ngOnInit() {
    this.m.commu.subscribe((data) => {
      console.log(data);
    }, (e)=>{
      console.log(e)
    })
    this.iser.getData('Hi from ou1')
  }

}
