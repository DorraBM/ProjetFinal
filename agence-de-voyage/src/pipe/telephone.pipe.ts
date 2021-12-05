import { Pipe, PipeTransform } from '@angular/core';
import { transform } from 'typescript';

@Pipe({
  name: 'telephone'
})
export class TelephonePipe implements PipeTransform {

  transform(value: number): string {
    var c = value.toString()
    return c[0] + c[1] + " " + c[2] + c[3] + c[4] + " " + c[5] + c[6] + c[7];
  }

}
