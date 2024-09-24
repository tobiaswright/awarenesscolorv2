import { Component } from '@angular/core';
import { ColorDropdownComponent } from "../color-dropdown/color-dropdown.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ColorDropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
