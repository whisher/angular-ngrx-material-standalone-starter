import { createSelector, createFeatureSelector } from '@ngrx/store';

import { settingsFeatureKey, SettingsState } from './settings.state';

export const selectFeature = createFeatureSelector<SettingsState>(settingsFeatureKey);

export const selectSettings = createSelector(selectFeature, (state: SettingsState) => state);

export const selectLanguage = createSelector(
  selectFeature,
  (state: SettingsState) => state.language
);
