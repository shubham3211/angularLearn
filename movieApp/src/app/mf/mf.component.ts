import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-mf',
  templateUrl: './mf.component.html',
  styleUrls: ['./mf.component.css']
})
export class MfComponent implements OnInit {

  weatherForm: FormGroup;
  names: FormArray;
  constructor() { }

  ngOnInit() {
    this.names = new FormArray([]);
    this.names.push(new FormControl('shubham'));
    this.names.push(new FormControl('vikram'));
    this.names.push(new FormControl('mohan'));
    this.names.push(new FormControl('pratap'));
    this.names.push(new FormControl('mohit'));
    this.weatherForm = new FormGroup({
      city: new FormControl('bangalore', Validators.required),
      cityId: new FormControl(null, Validators.maxLength(3)),
      latLong: new FormGroup({
        lat: new FormControl(null),
        long: new FormControl(null, Validators.required)
      }),
      zip: new FormGroup({
        zipNumber: new FormControl(null, [Validators.required, this.forbiddenZip]),
        country: new FormControl(null, [Validators.required], this.forbiddenCountry)
      }),
      box: new FormGroup({
        lonLeft: new FormControl(null),
        lonRight: new FormControl(null),
        latLeft: new FormControl(null),
        latRight: new FormControl(null)
      }),
      circle: new FormGroup({
        cLat: new FormControl(null),
        cLong: new FormControl(null),
        circle: new FormControl(null)
      }),
      people: this.names
    })

    this.weatherForm.patchValue({
      latLong: {
        lat: 20
      }
    })
  }

  onSubmit(){
    console.log(this.weatherForm);
  }

  forbiddenZip(control: FormControl):{[key:string]:boolean}{
    if(control.value == 110087){
      return {'Invalid Zip': true}
    }
    return null;
  }

  forbiddenCountry(control: FormControl):Promise<any> | Observable<any>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'pakistan'){
          resolve({'invalid country': false});
        }else{
          resolve(null)
        }
      }, 2000)
    })
  }
}
