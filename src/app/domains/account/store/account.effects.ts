import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { UserAccountResponseDto } from '@api/models';
import { UserService } from '@api/services/user.service';
import * as AccountActions from './account.actions';
import * as RouterActions from '../../router/router.actions';

@Injectable()
export class AccountEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.load),
      mergeMap(() =>
        this.service.account().pipe(
          map((data) => AccountActions.loadSuccess({ data })),
          catchError((error) => of(AccountActions.loadFailure({ error })))
        )
      )
    );
  });

  loadWithoutRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.loadWithoutRedirect),
      mergeMap(() =>
        this.service.account().pipe(
          map((data) => AccountActions.loadWithoutRedirectSuccess({ data })),
          catchError((error) => of(AccountActions.loadFailure({ error })))
        )
      )
    );
  });

  loadSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.loadSuccess),
      map(({ data }: { data: UserAccountResponseDto }) => {
        const role = data.role;
        if (this.isAdmin(role)) {
          return RouterActions.routerGo({ path: ['/admin'] });
        } else {
          return RouterActions.routerGo({ path: ['/'] });
        }
      })
    );
  });

  constructor(private actions$: Actions, private service: UserService) {}

  private isAdmin(role: string): boolean {
    return role === 'admin';
  }
}
