import { Component, inject } from '@angular/core';
import { DataService } from '../service/data.service';
import type { ColorMap } from '../color-data.model';



@Component({
  selector: 'app-color-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './color-dropdown.component.html',
  styleUrl: './color-dropdown.component.css'
})
export class ColorDropdownComponent {
  dataService = inject( DataService );
  colorMap: Map<String, ColorMap> = this.dataService.getColorMap();

  onSelect( color: string ) {
    this.dataService.filterByColor( color )
  }

}
