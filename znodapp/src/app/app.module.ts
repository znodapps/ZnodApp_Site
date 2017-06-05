import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { CONST_ROUTING } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { CustomersComponent } from './customers/customers.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProductComponent,
    FeaturesComponent,
    PricingComponent,
    CustomersComponent,
    ContactComponent,
    BookComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
