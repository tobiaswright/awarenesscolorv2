import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorListComponent } from "./color-list/color-list.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ColorListComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'awarenesscolorV2';
}
