import { Component, inject } from '@angular/core';
import { DataService } from '../service/data.service';


interface ColorMap {
  name: string;
  displayName: string;
  hexCode: string;
}

@Component({
  selector: 'app-color-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './color-dropdown.component.html',
  styleUrl: './color-dropdown.component.css'
})
export class ColorDropdownComponent {
  colorMap = inject( DataService ).getColorMap();

  constructor() {
    console.log(this.colorMap)
  }

}