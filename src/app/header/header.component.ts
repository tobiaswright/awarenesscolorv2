import { Component, inject } from '@angular/core';
import { ColorDropdownComponent } from "../color-dropdown/color-dropdown.component";
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ColorDropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  dataService = inject( DataService )

  reverseList() {
    this.dataService.reverseList();
  }
}
