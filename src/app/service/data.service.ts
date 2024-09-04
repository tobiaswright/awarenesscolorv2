import { Injectable, signal } from '@angular/core';
 
import data from '../assets/data.json'
import colorMap from '../assets/color-map.json';
import { type Data } from '../color-data.model';

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
  private unsortedData: ColorData[] = data;
  private unsortedColorMap: ColorMap[] = colorMap;
  data = signal<Data[]>([]);

  constructor() {
    let sortedList = this.sortList( this.unsortedData, 'cause' );
    let map = this.createMap( this.unsortedColorMap );

    this.data.set(this.addColorMap(sortedList, map));
  }

  getColorData() {
    return this.data
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
    return arr.map( (item) => {
      const htmlcolor = item.htmlcolor.split(',');
      const causeFull = item.causeFull !== "" ? item.causeFull : item.cause;
      const isSingle = htmlcolor.length > 1 ? false : true;
      const id = Math.random() * 100;
      const displayName = htmlcolor.map( item => map.get(item)!.displayName).join(", ");
      const hexCode = htmlcolor.map( item => map.get(item)!.hexCode);

      return {
        cause: item.cause,
        causeFull: causeFull,
        isSingle: isSingle,
        id: id,
        colorData: {
          htmlcolor: htmlcolor,
          displayName: displayName,
          hexCode: hexCode
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
