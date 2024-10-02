import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateNames',
  standalone: true
})
export class TruncateNamesPipe implements PipeTransform {

  //our magicNumer is the number of spaces available when the page is full size so the causes done wrap. Will in the future make this dynamic
  magicNumber = 22

  transform(value: string, ...args: unknown[]): string {

    if ( value.length > this.magicNumber ) {
      return value.slice( 0, this.magicNumber ) + "..."
    }
    return value;
  }

}
