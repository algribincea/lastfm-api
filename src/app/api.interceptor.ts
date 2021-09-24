import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloned = request.clone({params: request.params.append('api_key', 'c3749f45ccef5f59e33fea1f1b87c1ad')});
    
    console.log('5555', cloned)
    
    return next.handle(cloned)
    // .pipe(tap( event => {

    // }));
  }
}
