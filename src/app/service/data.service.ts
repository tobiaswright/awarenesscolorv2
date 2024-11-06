import { computed, Injectable, signal } from '@angular/core';

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
  private map = this.createMap(this.unsortedColorMap);
  private causeObj = this.createCauseObj(this.unsortedData, this.map);
  private itemsToLoad = 60;
  private pagination = signal(this.itemsToLoad);
  private filterColor = signal<string>("");
  private filterCause = signal<string>("");
  private data = signal<Data[]>([]);
  private causeList = computed(() => {
    let data = this.data();

    if (this.filterColor()) {
      data = data.filter(
        (item) => item.colorData.htmlcolor[0] === this.filterColor() ||
                  item.colorData.htmlcolor[1] === this.filterColor()
      );
    }

      data = data.filter(
        (item) => item.cause.toLowerCase().includes( this.filterCause().toLowerCase())
      );


    data = this.sortList(data);

    return data.slice(0, this.pagination());
  })

  constructor() {
    this.data.set(this.causeObj);
  }

  getCauseData() {
    return this.causeList;
  }

  getColorMap() {
    return this.map
  }

  loadMore() {
    this.pagination.set(this.pagination() + this.itemsToLoad);
  }

  filterByColor( color: string ) {
    this.filterColor.set( color );
  }

  fllterByCause ( str: string) {
    this.filterCause.set( str )
  }

  private createMap(array: ColorMap[]): Map<string, ColorMap> {
    let map = new Map();
    array.sort( (a,b)=> (a.name).localeCompare(b.name))
    .forEach((item) => {
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

  private sortList(arr: Data[], reverse = false, prop = 'cause') {
    return arr.sort((a: Data, b: Data) => {
      const c = prop as keyof Data ;

      const x = b[c] as string;
      const y = a[c] as string
      
      if (reverse) {
        return x.localeCompare(y);
      }
      return y.localeCompare(x);
    });
  }
}



