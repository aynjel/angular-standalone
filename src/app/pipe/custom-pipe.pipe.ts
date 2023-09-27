import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  nvalue: string = 'Hello World';

  transform(value: string, ...args: unknown[]): any {
    this.nvalue = value.toLowerCase();
    return this.nvalue;
  }

}
