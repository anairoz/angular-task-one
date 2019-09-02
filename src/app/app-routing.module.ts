import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { AllProductsComponent} from './all-products/all-products/all-products.component';

const routes: Routes = [
    { path : '', component: AppComponent},
    { path : 'products', component: AllProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
