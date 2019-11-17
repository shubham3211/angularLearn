import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: any, l1, l2): any {
    return value.substr(l1, l2);
  }

}
