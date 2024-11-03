import { Component, inject } from '@angular/core';
import { ColorDropdownComponent } from "../color-dropdown/color-dropdown.component";
import { DataService } from '../service/data.service';
import type { ColorMap } from '../color-data.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ColorDropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  dataService = inject( DataService );
  color = "red";

  constructor(private data: DataService) {
    this.color = this.getRandomColor(this.dataService.getColorMap());
  }

  private getRandomColor( map: Map<string, ColorMap> ) : string {

    const array = Array.from(map.keys());

    let color = array[Math.floor(Math.random() * array.length)]

    if (color !== "white") {
      return color;
    } else {
      return this.getRandomColor( map )
    }

  }

}
