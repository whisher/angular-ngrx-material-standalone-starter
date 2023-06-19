import { settingsFeatureKey, SettingsState } from './settings/store';

export interface AppState {
  [settingsFeatureKey]: SettingsState;
}
