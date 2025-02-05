import { Component, inject, OnInit, signal } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CauseCardComponent } from "../cause-card/cause-card.component";
import { ColorMap } from '../color-data.model';
import { TruncateNamesPipe } from "../truncate-names.pipe";


@Component({
  selector: 'app-color-page',
  standalone: true,
  imports: [MatSlideToggleModule, CauseCardComponent, TruncateNamesPipe],
  templateUrl: './color-page.component.html',
  styleUrl: './color-page.component.css'
})
export class ColorPageComponent {
  dataService = inject( DataService );
  router = inject( Router );
  activeRoute = inject( ActivatedRoute );
  causeList = this.dataService.getCauseData();
  colorMap: Map<String, ColorMap> = this.dataService.getColorMap();
  // color: <colorMap>
  swatchColor = "";
  displayName = "";

  name = signal<string | null>( null );

  constructor() {
    // this.name.set( this.dataService.getFilterColor() );

    this.activeRoute.paramMap.subscribe(paramMap => {
      const name = paramMap.get('name');    // get param from dictonary
      this.dataService.filterByColor( name! );
      
      let colorInfo = this.colorMap.get(name!)
      this.swatchColor = colorInfo!.hexCode
      this.displayName = colorInfo!.displayName
    });
  }
}
