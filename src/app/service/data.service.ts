import { Injectable, signal } from '@angular/core';

import data from '../assets/data.json';
import colorMap from '../assets/color-map.json';
import { type Data } from '../color-data.model';

interface ColorData {
  cause: string;
  causeFull: string;
  htmlcolor: string;
}

interface ColorMap {
  name: string;
  displayName: string;
  hexCode: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private unsortedData: ColorData[] = data;
  private unsortedColorMap: ColorMap[] = colorMap;
  data = signal<Data[]>([]);

  constructor() {
    let map = this.createMap(this.unsortedColorMap);
    let causeObj = this.createCauseObj(this.unsortedData, map);

    this.data.set(causeObj);
  }

  getCauseData() {
    return this.data;
  }

  private createMap(array: ColorMap[]) {
    let map = new Map();
    array.forEach((item) => {
      map.set(item.name, { ...item });
    });
    return map;
  }

  private createCauseObj(arr: ColorData[], map: Map<string, ColorMap>): Data[] {
    return arr.map((item) => {
      const htmlcolor = item.htmlcolor.split(',');
      const causeFull = item.causeFull !== '' ? item.causeFull : item.cause;
      const isSingle = htmlcolor.length > 1 ? false : true;
      const id = Math.random() * 100;
      const displayName = htmlcolor
        .map((item) => map.get(item)!.displayName)
        .join(', ');
      const hexCode = htmlcolor.map((item) => map.get(item)!.hexCode);

      return {
        cause: item.cause,
        causeFull: causeFull,
        isSingle: isSingle,
        id: id,
        colorData: {
          htmlcolor: htmlcolor,
          displayName: displayName,
          hexCode: hexCode,
        },
      };
    });
  }
}
