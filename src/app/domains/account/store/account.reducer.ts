// Ngrx
import { Action, createReducer, on } from '@ngrx/store';

// Store
import { AccountState } from './account.state';
import * as AccountActions from './account.actions';

export const initialState: AccountState = {
  error: null,
  loaded: false,
  data: null
};

const _accountReducer = createReducer<AccountState>(
  initialState,
  on(AccountActions.load, (): AccountState => {
    return initialState;
  }),
  on(AccountActions.loadFailure, (state, { error }): AccountState => {
    return {
      ...state,
      error,
      loaded: false,
      data: null
    };
  }),
  on(
    AccountActions.loadSuccess,
    AccountActions.loadWithoutRedirectSuccess,
    (state, { data }): AccountState => {
      return {
        ...state,
        error: null,
        loaded: true,
        data: data
      };
    }
  )
);

export function accountReducer(state: AccountState | undefined, action: Action) {
  return _accountReducer(state, action);
}
