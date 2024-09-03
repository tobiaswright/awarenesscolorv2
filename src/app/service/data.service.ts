import { computed, Injectable, OnInit, signal } from '@angular/core';

import data from '../assets/data.json'
import colorMap from '../assets/color-map.json';


interface ColorData {
  cause:string,
  causeFull:string,
  htmlcolor:string
}

interface ColorMap {
  name:string,
  displayName:string,
  hexCode:string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private unsortedDate: ColorData[] = data;
  // private unsortedData = signal<ColorData[]>(data);

  constructor() {
    let sortedList = this.sortList( this.unsortedDate, 'cause' );
    
    
  }



  getColorData() {
    // return this.unsortedData;

    // return computed( ()=> this.sortList( this.unsortedData(), 'cause'));
  }

  sortData() {
    // this.unsortedData.update( ()=> this.sortList( this.unsortedData(), 'cause') )
      // this.unsortedData.set( data )
      // console.log( this.unsortedData())
  }

  private createMap(array: ColorMap[]) {
    let map = new Map();
    array.forEach(item => {
      map.set(item.name, {...item});
    })
    return map
  }

  private addColorData( arr: ColorData[] ) {

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
