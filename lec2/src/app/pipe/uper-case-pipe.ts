import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase',
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args[0]);
    console.log(args[1]);
    return value.toUpperCase();
  }

}
