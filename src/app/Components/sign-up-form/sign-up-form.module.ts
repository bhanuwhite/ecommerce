import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpFormRoutingModule } from './sign-up-form-routing.module';
import { SignUpFormComponent } from './sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    SignUpFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignUpFormModule { }
