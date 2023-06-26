import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectAccount, selectError, selectIsAdmin, selectLoaded } from './account.selectors';
import * as AccountActions from './account.actions';

// Models
import { ErrorDto, UserAccountResponseDto } from '@api/models';

@Injectable({ providedIn: 'root' })
export class AccountFacade {
  get data$(): Observable<UserAccountResponseDto | undefined> {
    return this.store.select(selectAccount);
  }

  get error$(): Observable<ErrorDto | null> {
    return this.store.select(selectError);
  }

  get isAdmin$(): Observable<boolean> {
    return this.store.select(selectIsAdmin);
  }

  get loaded$(): Observable<boolean> {
    return this.store.select(selectLoaded);
  }

  constructor(private store: Store) {}

  load(): void {
    this.store.dispatch(AccountActions.load());
  }

  loadWithoutRedirect(): void {
    this.store.dispatch(AccountActions.loadWithoutRedirect());
  }
}
