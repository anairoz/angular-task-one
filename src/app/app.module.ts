import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatInputModule, MatSelectModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AllProductsModule} from './all-products/all-products.module';

import { AddProductComponent} from './all-products/add-product/add-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { ProductsComponent } from './home/products/products.component';
import { SignInComponent } from './home/navigation/sign-in/sign-in.component';
import { FooterComponent } from './home/footer/footer.component';
import { LogInComponent } from './home/navigation/log-in/log-in.component';
import { MainComponent } from './home/main/main.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AddProductComponent,
    SignInComponent,
    LogInComponent
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
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [AddProductComponent, LogInComponent, SignInComponent]
})
export class AppModule { }
