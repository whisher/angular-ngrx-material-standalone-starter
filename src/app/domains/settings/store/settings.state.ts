import { Language } from '../models';

export const settingsFeatureKey = 'settings';

export interface SettingsState {
  language: Language;
}
