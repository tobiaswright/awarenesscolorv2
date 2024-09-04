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

export interface Data {
  cause: string;
  causeFull: string;
  isSingle: boolean;
  id: number;
  colorData: Color;
}
export interface Color {
  htmlcolor?: (string)[] | null;
  displayName: string;
  hexCode?: (string)[] | null;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private unsortedData: ColorData[] = data;
  private unsortedColorMap: ColorMap[] = colorMap;
  list = signal<Data[]>([]);

  // private unsortedData = signal<ColorData[]>(data);

  constructor() {
    let sortedList = this.sortList( this.unsortedData, 'cause' );
    let map = this.createMap( this.unsortedColorMap );

    this.list.set(this.addColorMap(sortedList, map));
  }

  getColorData() {
    return this.list
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

  private addColorMap( arr: ColorData[], map: Map<string, ColorMap>  ):Data[] {
    // let colorDataAry = [];

    return arr.map( (item) =>{
      let htmlcolor = item.htmlcolor.split(',');

      return {
        cause: item.cause,
        causeFull: item.causeFull !== "" ? item.causeFull : item.cause,
        isSingle: htmlcolor.length > 1 ? false : true,
        id: Math.random() * 100,
        colorData: {
          htmlcolor: [...htmlcolor],
          displayName: htmlcolor.map( item => map.get(item)?.displayName).join(", "),
          hexCode: htmlcolor.map( item => map.get(item)!.hexCode)
        }
      }
    })
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
