import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAddressPageRoutingModule } from './add-address-page-routing.module';
import { AddAddressPageComponent } from './add-address-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddAddressPageComponent
  ],
  imports: [
    CommonModule,
    AddAddressPageRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class AddAddressPageModule { }
