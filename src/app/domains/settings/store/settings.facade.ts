import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Language } from '../models';
import { selectLanguage } from './settings.selectors';
import * as SettingsActions from './settings.actions';

@Injectable({ providedIn: 'root' })
export class SettingsFacade {
  get language$(): Observable<Language> {
    return this.store.select(selectLanguage);
  }

  constructor(private store: Store) {}

  useLanguage(language: Language): void {
    this.store.dispatch(SettingsActions.changeLanguage({ language }));
  }
}
