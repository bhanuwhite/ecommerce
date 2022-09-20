import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: () => import('./Components/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'loginPage', loadChildren: () => import('./Components/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'cartPage', loadChildren: () => import('./Components/cart-page/cart-page.module').then(m => m.CartPageModule) },
  { path: 'products', loadChildren: () => import('./Components/products/products.module').then(m => m.ProductsModule) },
  { path: 'signUp', loadChildren: () => import('./Components/sign-up-form/sign-up-form.module').then(m => m.SignUpFormModule) },
  { path: 'addressPage', loadChildren: () => import('./Components/add-address-page/add-address-page.module').then(m => m.AddAddressPageModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
