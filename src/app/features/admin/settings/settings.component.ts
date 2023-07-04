import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatSelectChange } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

import { Language } from '@domains/settings';
import { SettingsFacade, APP_LANGUAGES } from '@domains/settings';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-admin-settings',
  standalone: true,
  imports: [AsyncPipe, NgFor, FormsModule, MatSelectModule, TranslateModule],
  templateUrl: './settings.component.html'
})
export class AdminSettingsComponent {
  language$ = this.settingsFacade.language$;
  languages = APP_LANGUAGES;
  constructor(private settingsFacade: SettingsFacade) {}
  useLanguage(event: MatSelectChange) {
    const lang = event.value as Language;
    this.settingsFacade.useLanguage(lang);
  }
}
