import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCharacter',
})
export class UpperCharacterPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const characterNumber: number = +(args[0] as number + 1) || 0;
    const index: string = value.charAt(characterNumber);

    return value.replace(index, index.toUpperCase());
  }

}
