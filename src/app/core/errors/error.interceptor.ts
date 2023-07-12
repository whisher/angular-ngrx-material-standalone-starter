import { HttpErrorResponse } from '@angular/common/http';
import { HttpInterceptorFn } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const errorHandler = (error: HttpErrorResponse): Observable<never> => {
  let message = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    message = error.error.message;
  } else {
    // server-side error
    message = error.error?.message ? error.error.message : 'Something went wrong, please try later';
  }

  return throwError(() => {
    return {
      message
    };
  });
};

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      return errorHandler(error);
    })
  );
};
