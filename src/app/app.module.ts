import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { AllProductsModule} from './all-products/all-products.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductComponent} from './add-product/add-product.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule,MatInputModule,MatSelectModule,MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsComponent,
    MainComponent,
    TestimonialsComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllProductsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [AddProductComponent]
})
export class AppModule { }
