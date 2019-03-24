import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut'
})
export class ShortcutPipe implements PipeTransform {

  transform(value: string): any {
    if(value.length > 20){
      return value.substr(0,20) + '...'
    }
    else return value;
  }

}
