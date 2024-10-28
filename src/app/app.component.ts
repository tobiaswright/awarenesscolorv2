import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorListComponent } from "./color-list/color-list.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CauseFilterComponent } from "./cause-filter/cause-filter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ColorListComponent, HeaderComponent, FooterComponent, CauseFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'awarenesscolorV2';
}
