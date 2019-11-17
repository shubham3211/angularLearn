import { Component, OnInit } from '@angular/core';
import { MService } from '../m.service';
import { IService } from '../i.service';

@Component({
  selector: 'app-in1',
  templateUrl: './in1.component.html',
  styleUrls: ['./in1.component.css']
})
export class In1Component implements OnInit {

  constructor(private mSer: MService, private iSer: IService) { }

  ngOnInit() {
    this.iSer.commu.subscribe((data) => {
      console.log(data);
    })
    this.mSer.getData('Hi from in1')
  }

}
