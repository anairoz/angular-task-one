import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
    { path: 'products', component: AllProductsComponent }
];

@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class AllProductsModule { }
