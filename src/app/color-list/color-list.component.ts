import { Component, effect, inject, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

interface ColorData {
  cause:string,
  causeFull:string,
  htmlcolor:string
}

@Component({
  selector: 'app-color-list',
  standalone: true,
  imports: [],
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.css'
})
export class ColorListComponent {
  colorList = inject( DataService );
  list = this.colorList.getData();
  
  constructor() {
    console.log("allo")
    effect(() => {
      console.log(this.list);
    });
  }


  // OnInit() {
  //   console.log("allo", this.data.colorData)
  // }
}
