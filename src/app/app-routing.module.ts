import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: () => import('./Components/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'LoginPage', loadChildren: () => import('./Components/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'cartPage', loadChildren: () => import('./Components/cart-page/cart-page.module').then(m => m.CartPageModule) },
  { path: 'products', loadChildren: () => import('./Components/products/products.module').then(m => m.ProductsModule) },
  { path: 'SignUpForm', loadChildren: () => import('./Components/sign-up-form/sign-up-form.module').then(m => m.SignUpFormModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
