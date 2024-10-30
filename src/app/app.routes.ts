import { ColorPageComponent } from './color-page/color-page.component';
import { ColorListComponent } from './color-list/color-list.component';


import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: ColorListComponent },
    { path: ':name', component: ColorPageComponent },
];
