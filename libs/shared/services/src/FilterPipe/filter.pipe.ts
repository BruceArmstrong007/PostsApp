import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter',
  standalone: true
})

export class FilterPipe implements PipeTransform {

  transform(value: any[],key : string): any {

    if(value && key){
      return value.filter((res:any)=> res?.name?.toLowerCase()?.startsWith(key?.toLowerCase()) || res?.name?.toLowerCase()?.includes(key?.toLowerCase()));
    }
    return value;
  }

}
