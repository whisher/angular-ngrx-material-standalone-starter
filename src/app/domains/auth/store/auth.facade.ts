import { Injectable } from '@angular/core';
import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { ErrorDto, LoginRequestDto, LoginResponseDto } from '@api/models';
import {
  selectError,
  selectIsAuthenticated,
  selectLoading,
  selectStatus,
  selectToken
} from './auth.selectors';
import * as AuthActions from './auth.actions';

export interface AuthStatus {
  error: ErrorDto | null;
  loading: boolean;
}
@Injectable({ providedIn: 'root' })
export class AuthFacade {
  get error$(): Observable<ErrorDto | null> {
    return this.store.select(selectError);
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated);
  }

  get loading$(): Observable<boolean> {
    return this.store.select(selectLoading);
  }

  get status$(): Observable<AuthStatus> {
    return this.store.select(selectStatus);
  }

  get token$(): Observable<string | null> {
    return this.store.select(selectToken);
  }

  constructor(private store: Store, private actionsSubject: ActionsSubject) {}

  login(credentials: LoginRequestDto): void {
    this.store.dispatch(AuthActions.login({ credentials }));
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  OnLoginSuccess(): Observable<{
    data: LoginResponseDto | undefined;
  }> {
    return this.actionsSubject.pipe(ofType(AuthActions.loginSuccess));
  }
}
