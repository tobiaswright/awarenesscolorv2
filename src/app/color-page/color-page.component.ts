import { Component, inject, OnInit, signal } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color-page',
  standalone: true,
  imports: [],
  templateUrl: './color-page.component.html',
  styleUrl: './color-page.component.css'
})
export class ColorPageComponent {
  dataService = inject( DataService );
  // route = inject( ActivatedRoute );
  name = signal<string | null>( null );

  constructor() {
    this.name.set( this.dataService.getFilterColor() )
  }
}
