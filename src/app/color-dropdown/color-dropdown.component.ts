import { Component, inject } from '@angular/core';
import { DataService } from '../service/data.service';
import type { ColorMap } from '../color-data.model';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-color-dropdown',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './color-dropdown.component.html',
  styleUrl: './color-dropdown.component.css'
})
export class ColorDropdownComponent {
  dataService = inject( DataService );
  colorMap: Map<String, ColorMap> = this.dataService.getColorMap();
  count = 0;
  
  onSelect( color: string ) {
    this.dataService.filterByColor( color )
  }

  constructor() {
    console.log(this.colorMap)
  }

}
