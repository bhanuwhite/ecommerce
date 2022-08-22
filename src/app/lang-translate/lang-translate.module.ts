import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// export function HttpLoaderFactory(http: HttpClient){
//   return new TranslateHttpLoader(http , [
//     {prefix:"./assets/data/json/translate", suffix:".json"},
//     {prefix:"./assets/data/json/translate", suffix:".json"},

//   ]);
// }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      }
    })
  ],
  exports:[
    HttpClientModule,
    TranslateModule,

  ]
})
export class LangTranslateModule { }
