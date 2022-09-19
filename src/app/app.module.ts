import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LangTranslateModule } from './lang-translate/lang-translate.module';
import { PopUPComponent } from './Components/pop-up/pop-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationInterceptor } from './services/notification.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    PopUPComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    LangTranslateModule,
    ReactiveFormsModule,

    
    
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
