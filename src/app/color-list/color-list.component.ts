import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-color-list',
  standalone: true,
  imports: [],
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.css'
})
export class ColorListComponent implements OnInit{
  data = inject( DataService);
  
  ngOnInit(): void {
    console.log("allo")
  }


  // OnInit() {
  //   console.log("allo", this.data.colorData)
  // }
}
