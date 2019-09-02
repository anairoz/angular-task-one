import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component'

const routes: Routes = [
    { path: 'products', component: AllProductsComponent }
];

@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    CommonModule
  ]
})
export class AllProductsModule { }
