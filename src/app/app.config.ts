import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { provideStoreDevtools } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { APP_DEFAULT_LANG } from '@domains/settings';

import { APP_ROUTES } from './app.routes';
import { APP_STORE, APP_AUTH_INTERCEPTORS } from '@domains/index';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors(APP_AUTH_INTERCEPTORS)),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: APP_DEFAULT_LANG,
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ),
    provideRouter(APP_ROUTES),
    APP_STORE,
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    })
  ]
};
