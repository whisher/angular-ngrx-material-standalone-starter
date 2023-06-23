import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ErrorDto } from '@api/models';
import { LoginResponseDto } from '@api/models/auth.model';
import { AuthService } from '@api/services/auth.service';
import * as AuthActions from './auth.actions';

export const AUTH_KEY = 'AUTH';

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

  constructor(private actions$: Actions, private service: AuthService) {}
}
