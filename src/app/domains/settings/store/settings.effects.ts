import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { TranslateService } from '@ngx-translate/core';

import * as SettingsActions from './settings.actions';

export const SETTINGS_KEY = 'SETTINGS';

@Injectable()
export class SettingsEffects {
  logActions$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SettingsActions.changeLanguage),
        map((action) => {
          this.translateService.use(action.language);
        })
      );
    },
    {
      dispatch: false
    }
  );
  constructor(
    private actions$: Actions,
    private store: Store,
    private translateService: TranslateService
  ) {}
}
