import { Component, computed, effect, inject, signal } from '@angular/core';
import { DataService } from '../service/data.service';

import { type Data } from '../color-data.model';

@Component({
  selector: 'app-color-list',
  standalone: true,
  imports: [],
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.css'
})
export class ColorListComponent {
  causeData = inject( DataService ).getCauseData();
  isSet = true;
  isReversed = signal(false);
  filterColor = signal<string | null>(null);
  causeList = computed(() => {
    let data = this.causeData();
    if (this.filterColor()) {
      data = this.causeData().filter(
        (item) => item.colorData.htmlcolor[0] === this.filterColor()
      );
    }

    if (this.isReversed()) {
      return this.sortList(data, this.isReversed());
    }

    return this.sortList(data);
  })
  
  constructor() {
    effect(() => {
      console.log("allo", this.causeData());
    });
  }

  reverseList() {
    this.isReversed.set(!this.isReversed());
  }

  filterByColor() {
    let toggle = this.isSet ? 'red' : null;
    this.filterColor.set(toggle);
    this.isSet = !this.isSet
  }

  private sortList(arr: Data[], reverse = false, prop = 'cause') {
    return arr.sort((a: Data, b: Data) => {
      const c = prop as keyof Data;

      const x = b[c] as string;
      const y = a[c] as string
      
      if (reverse) {
        return x.localeCompare(y);
      }
      return y.localeCompare(x);
    });
  }
}
