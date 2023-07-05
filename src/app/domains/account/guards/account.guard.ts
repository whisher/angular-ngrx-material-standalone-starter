import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';

import { UserAccountResponseDto } from '@api/models';
import { AccountFacade } from '../store/account.facade';

const checkStore = (): Observable<UserAccountResponseDto | null> => {
  const facade = inject(AccountFacade);
  return facade.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        facade.loadWithoutRedirect();
      }
    }),
    filter((loaded: boolean) => loaded),
    switchMap(() => {
      return facade.data$;
    }),
    take(1)
  );
};

export const accountGuard = (route: Route): Observable<boolean> => {
  return checkStore().pipe(
    switchMap((account: UserAccountResponseDto | null) => {
      const data = route.data;
      if (account && data) {
        const userRole = account.role;
        if (data['roles'].includes(userRole)) {
          return of(true);
        }
      }
      return of(false);
    }),
    catchError(() => of(false))
  );
};
