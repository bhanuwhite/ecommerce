import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler){
    console.log('Http Request Started');
    return next.handle(request)
                  .pipe(
                    catchError((error: HttpErrorResponse)=>{
                      const errorMessage= this.setError(error)
                    console.log(errorMessage)
                    alert(errorMessage)
                    return throwError(errorMessage)
                  })
                  )
    
  }
  setError(error: HttpErrorResponse): String{
    let errorMessage = 'Unknown error Occured';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      if(error.status!==0){
      errorMessage = error.error;
    }
    }
    return errorMessage;
  }
}
