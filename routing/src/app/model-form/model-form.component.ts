import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  mf: FormGroup;
  gym: FormArray;
  constructor(private http:HttpClient) { }
  name="Shubham"
  num=4
  person =  {
    name: 'shubahm',
    age: 22,
    dob: '29/01/1997'
  }
  dt=new Date();
  ngOnInit() {
    this.gym = new FormArray([]);
    for(let i=0;i<5;i++){
      this.gym.push(new FormControl(null));
    }
    this.mf = new FormGroup({
      city: new FormControl(null, [Validators.required, this.valMoreThan5]),
      cityId: new FormControl(null, [Validators.required]),
      latLong: new FormGroup({
        lat: new FormControl(null),
        long: new FormControl(null)
      }),
      zip: new FormGroup({
        zipNo: new FormControl(null, [Validators.maxLength(3), this.lessThanZero]),
        country: new FormControl(null)
      }),
      box: new FormGroup({
        latLeft: new FormControl(null),
        latRight: new FormControl(null),
        longLeft: new FormControl(null),
        longRight: new FormControl(null)
      }),
      cycle: new FormGroup({
        clat: new FormControl(null),
        clong: new FormControl(null),
        count: new FormControl(null)
      }),
      hobby: this.gym
    })

    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e1b3c0752cce89262f426cb3a0b1f483')
      .subscribe((data) => {
        console.log(data);
      })
  }

  valMoreThan5(f:FormControl){
    if(!f.value){
      return null
    }
    if(f.value.length>=5){
      return {'value Greater Than 5': true}
    }else{
      return null
    }
  }

  lessThanZero(f: FormControl){
    if(!f.value){
      return null;
    }
    if(f.value < 0){
      return {'value less than 0': true}
    }
    return null;
  }

  onSubmit(){
    console.log(this.mf);
  }
}
