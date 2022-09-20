import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressPageComponent } from './add-address-page.component';

const routes: Routes = [{ path: '', component: AddAddressPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAddressPageRoutingModule { }
