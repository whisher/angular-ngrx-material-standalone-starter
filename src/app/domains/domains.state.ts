import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth/store';
import * as fromSettings from './settings/store';

export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.AuthState;
  [fromSettings.settingsFeatureKey]: fromSettings.SettingsState;
}

export const APP_REDUCERS: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.authReducer,
  [fromSettings.settingsFeatureKey]: fromSettings.settingsReducer
};
