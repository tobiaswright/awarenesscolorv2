import { computed, Injectable, OnInit, signal } from '@angular/core';

import data from '../assets/data.json'

interface ColorData {
  cause:string,
  causeFull:string,
  htmlcolor:string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private unsortedData = signal<ColorData[]>(data);

  getData() {
    return computed( ()=> this.sortList( this.unsortedData(), 'cause'));
  }

  private sortList( arr: ColorData[], prop: string) {
    return arr.sort( (a:ColorData, b:ColorData) => {
      const c = prop as keyof ColorData;

      const x = a[c].toLowerCase();
      const y = b[c].toLowerCase();
      return x.localeCompare(y)
    })
  }

}
