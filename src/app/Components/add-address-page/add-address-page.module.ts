import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAddressPageRoutingModule } from './add-address-page-routing.module';
import { AddAddressPageComponent } from './add-address-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AddAddressPageComponent
  ],
  imports: [
    CommonModule,
    AddAddressPageRoutingModule,
    ReactiveFormsModule,
    MatSelectModule
    
  ]
})
export class AddAddressPageModule { }
