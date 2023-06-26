import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { take, switchMap } from 'rxjs/operators';
import { AuthFacade } from '../store/auth.facade';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const facade = inject(AuthFacade);
  return facade.token$.pipe(
    take(1),
    switchMap((token: string | null) => {
      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      return next(req);
    })
  );
};
