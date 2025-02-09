import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allowNumericOnly'
})
export class AllowNumericOnlyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
