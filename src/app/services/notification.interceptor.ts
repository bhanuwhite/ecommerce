import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    console.log('Http Request Started');
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = "";
          if (error.status === 400) {
            this.snackBar.open("Bad Request")
          }
          else if (error.status ===0) {
            this.snackBar.open("Network Error")
          }
          else if (error.status === 404) {
            this.snackBar.open("Page Not Found")
          }
          else if (error.status === 500) {
            this.snackBar.open("Server Error")
          }
          else {
            ("Unknown Error Occured")
          }
          return throwError(errorMessage);
        })
      )

  }

}
