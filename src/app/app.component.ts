import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorListComponent } from "./color-list/color-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ColorListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'awarenesscolorV2';
}
