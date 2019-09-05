import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { AllProductsComponent} from './all-products/all-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent} from './home/home.component';
import { AddProductComponent} from './all-products/add-product/add-product.component';

const routes: Routes = [
    { path : '', component: HomeComponent},
    { path : 'products', component: AllProductsComponent},
    { path : 'add',component: AddProductComponent},
    { path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
