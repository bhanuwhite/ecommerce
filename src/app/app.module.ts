import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LangTranslateModule } from './lang-translate/lang-translate.module';
import { PopUPComponent } from './Components/pop-up/pop-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationInterceptor } from './services/notification.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddAddressPageComponent } from './Components/add-address-page/add-address-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PopUPComponent,
    AddAddressPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    LangTranslateModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
