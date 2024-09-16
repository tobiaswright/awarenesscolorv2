import { Component, input } from '@angular/core';

import { type Data } from '../color-data.model';


@Component({
  selector: 'app-cause-card',
  standalone: true,
  imports: [],
  templateUrl: './cause-card.component.html',
  styleUrl: './cause-card.component.css'
})
export class CauseCardComponent {
  cause = input.required<Data>();

  constructor() {
  }
}
