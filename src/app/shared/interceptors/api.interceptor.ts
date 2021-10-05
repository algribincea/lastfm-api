import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const cloned = request.clone({ params: request.params.append('api_key', 'c3749f45ccef5f59e33fea1f1b87c1a') });
    const cloned = request.clone({ params: request.params.append('api_key', 'c3749f45ccef5f59e33fea1f1b87c1ad') });
    return next.handle(cloned)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          
          if (error.status == 403)
            console.log('error', error.status );
          return throwError(error);
        })
      );
  }
}

