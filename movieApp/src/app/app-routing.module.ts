import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherFormComponent } from '../app/weather-form/weather-form.component'
import { MfComponent } from './mf/mf.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';

const routes = [
  { path: 'form', component: WeatherFormComponent },
  { path: 'mform', component: MfComponent },
  { path: 'pipe', component: PipesComponent },
  { path: 'dir', component: DirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  numbers=[1, 2, 3, 4, 5];
}
