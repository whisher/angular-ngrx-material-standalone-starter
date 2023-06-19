import { Action, createReducer, on } from '@ngrx/store';

import { SettingsState } from './settings.state';
import * as SettingsActions from './settings.actions';
import { APP_DEFAULT_LANG } from '../constants';

export const initialState: SettingsState = {
  language: APP_DEFAULT_LANG
};

const _settingsReducer = createReducer(
  initialState,
  on(SettingsActions.changeLanguage, (state, action): SettingsState => {
    const { type, ...rest } = action;
    return { ...state, ...rest };
  })
);

export function settingsReducer(state: SettingsState | undefined, action: Action) {
  return _settingsReducer(state, action);
}
