import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { FilterPipe } from 'src/app/shared/filter.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    FilterPipe,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    TranslateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
