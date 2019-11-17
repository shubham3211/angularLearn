import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }
  city=""
  mohan=""
  ngOnInit() {
  }

  onSubmit(f: NgForm){
    console.log(f);
  }

  printChange(event){
    console.log(event)
  }
}
