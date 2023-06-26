import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthFacade } from '../store/auth.facade';

export const authStatusInterceptor: HttpInterceptorFn = (req, next) => {
  const facade = inject(AuthFacade);
  const status = [401, 403, 404];
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (status.includes(error.status)) {
        facade.logout();
      }
      return throwError(() => error);
    })
  );
};
