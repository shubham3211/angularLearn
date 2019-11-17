import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, gen): any {
    console.log(gen)
    return (gen=='male' ? 'Mr' : 'Mrs') + value;
  }

}
