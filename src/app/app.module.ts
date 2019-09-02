import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { AllProductsModule} from './all-products/all-products.module'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsComponent,
    MainComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
