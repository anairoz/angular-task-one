import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
    { path: 'products', component: AllProductsComponent }
];

@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule
  ]
})
export class AllProductsModule { }
