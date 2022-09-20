import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartPageComponent } from './cart-page.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    CartPageRoutingModule,
  ]
})
export class CartPageModule { }
