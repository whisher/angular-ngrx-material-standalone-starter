import { RouterReducerState } from '@ngrx/router-store';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

import { ActionReducerMap } from '@ngrx/store';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { CustomRouterSerializer, RouterEffects, RouterStateUrl } from './router';
import * as fromAccount from './account/store';
import * as fromAuth from './auth/store';
import * as fromSettings from './settings/store';
import { APP_METAREDUCERS } from './metareducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  [fromAccount.accountFeatureKey]: fromAccount.AccountState;
  [fromAuth.authFeatureKey]: fromAuth.AuthState;
  [fromSettings.settingsFeatureKey]: fromSettings.SettingsState;
}

export const APP_REDUCERS: ActionReducerMap<AppState> = {
  router: routerReducer,
  [fromAccount.accountFeatureKey]: fromAccount.accountReducer,
  [fromAuth.authFeatureKey]: fromAuth.authReducer,
  [fromSettings.settingsFeatureKey]: fromSettings.settingsReducer
};

export const APP_STORE = [
  provideStore(APP_REDUCERS, { metaReducers: APP_METAREDUCERS }),
  provideEffects([
    RouterEffects,
    fromAccount.AccountEffects,
    fromAuth.AuthEffects,
    fromSettings.SettingsEffects
  ]),
  provideRouterStore({
    serializer: CustomRouterSerializer
  })
];
