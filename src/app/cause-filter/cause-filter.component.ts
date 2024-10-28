import { Component, inject, signal } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-cause-filter',
  standalone: true,
  imports: [],
  templateUrl: './cause-filter.component.html',
  styleUrl: './cause-filter.component.css'
})
export class CauseFilterComponent {
  dataService = inject( DataService )
  filterQuery = signal<string>('');

  onFilterUpdate( str: string ) {
    console.log(str);
    this.dataService.fllterByCause( str )
  }
}
