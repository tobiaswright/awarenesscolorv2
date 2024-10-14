import { ChangeDetectionStrategy, Component, HostListener, inject,  } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { DataService } from '../service/data.service';

import { ColorDropdownComponent } from "../color-dropdown/color-dropdown.component";
import { CauseCardComponent } from "../cause-card/cause-card.component";

@Component({
  selector: 'app-color-list',
  standalone: true,
  imports: [ColorDropdownComponent, CauseCardComponent, ScrollingModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.css'
})
export class ColorListComponent {
  dataService = inject( DataService )
  causeList = this.dataService.getCauseData();

  reverseList() {
    this.dataService.reverseList();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the user has scrolled to the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("allo")
      this.dataService.loadMore();
    }
  }

}
