import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthFacade } from '../store/auth.facade';

export const authGuard = (): Observable<boolean> => {
  const facade = inject(AuthFacade);
  return facade.isAuthenticated$.pipe(
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        facade.logout();
        return false;
      }
      return true;
    }),
    take(1)
  );
};

export const authJustLoggedGuard = (): Observable<boolean | UrlTree> => {
  const facade = inject(AuthFacade);
  const router = inject(Router);
  return facade.isAuthenticated$.pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        return router.parseUrl('/');
      }
      return true;
    }),
    take(1)
  );
};
