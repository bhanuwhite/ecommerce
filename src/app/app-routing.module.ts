import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressPageComponent } from './Components/add-address-page/add-address-page.component';
const routes: Routes = [
  { path: '', loadChildren: () => import('./Components/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'loginPage', loadChildren: () => import('./Components/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'cartPage', loadChildren: () => import('./Components/cart-page/cart-page.module').then(m => m.CartPageModule) },
  { path: 'products', loadChildren: () => import('./Components/products/products.module').then(m => m.ProductsModule) },
  { path: 'signUp', loadChildren: () => import('./Components/sign-up-form/sign-up-form.module').then(m => m.SignUpFormModule) },
  { path: 'address-page', component: AddAddressPageComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
