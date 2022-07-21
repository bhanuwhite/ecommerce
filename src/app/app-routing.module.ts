import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'LoginPage', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
