import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ErrorDto } from '@api/models';
import { LoginResponseDto } from '@api/models/auth.model';
import { AuthService } from '@api/services/auth.service';
import * as AuthActions from './auth.actions';
import * as RouterActions from '../../router/router.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap((action) =>
        this.service.login(action.credentials).pipe(
          map((data: LoginResponseDto) => {
            return AuthActions.loginSuccess({ data });
          }),
          catchError((error: ErrorDto) => {
            return of(AuthActions.loginFailure({ error }));
          })
        )
      )
    );
  });
  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      map(() => {
        return RouterActions.routerGo({
          path: ['/login'],
          extras: { replaceUrl: true }
        });
      })
    );
  });

  constructor(private actions$: Actions, private service: AuthService) {}
}
