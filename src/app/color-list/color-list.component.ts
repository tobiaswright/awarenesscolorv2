import { Component, effect, inject,  } from '@angular/core';
import { DataService } from '../service/data.service';

import { ColorDropdownComponent } from "../color-dropdown/color-dropdown.component";

@Component({
  selector: 'app-color-list',
  standalone: true,
  imports: [ColorDropdownComponent],
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.css'
})
export class ColorListComponent {
  dataService = inject( DataService )
  causeList = this.dataService.getCauseData();

  reverseList() {
    this.dataService.reverseList();
  }

}
