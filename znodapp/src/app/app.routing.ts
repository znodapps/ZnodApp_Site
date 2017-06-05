import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { CustomersComponent } from './customers/customers.component';
import { ContactComponent } from './contact/contact.component';
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/weather', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, 
    { path: 'product', component: ProductComponent }, 
    { path: 'features', component: FeaturesComponent }, 
    { path: 'pricing', component: PricingComponent }, 
    { path: 'customers', component: CustomersComponent }, 
    { path: 'contact', component: ContactComponent } 
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);