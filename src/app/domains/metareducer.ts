import { MetaReducer, ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppState } from './domains.state';

export function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return localStorageSync({
    keys: [{ auth: ['data'] }, { settings: ['language'] }],
    rehydrate: true
  })(reducer);
}

const metaReducersList = [localStorageSyncReducer];

export const APP_METAREDUCERS: MetaReducer<AppState>[] = metaReducersList;
