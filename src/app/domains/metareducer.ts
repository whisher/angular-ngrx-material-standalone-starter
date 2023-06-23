import { MetaReducer, ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [{ auth: ['data'] }, { settings: ['language'] }],
    rehydrate: true
  })(reducer);
}

const metaReducersList = [localStorageSyncReducer];

export const APP_METAREDUCERS: MetaReducer<any>[] = metaReducersList;
