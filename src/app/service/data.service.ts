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
  private data = signal(data);

  sortedData = computed( ()=> this.sortList( this.data(), 'cause'));


  get colorData() {
    return this.sortedData();
  }

  private sortList( arr: ColorData[], prop: string) {
    return arr.sort( (a, b) => {
      const c = prop as keyof ColorData;

      const x = a[c].toLowerCase();
      const y = b[c].toLowerCase();
      return x.localeCompare(y)
    })
  }

}
