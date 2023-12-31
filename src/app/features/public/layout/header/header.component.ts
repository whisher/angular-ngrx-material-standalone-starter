import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UiLangPickerComponent } from '@shared/ui/lang-picker/lang-picker.component';
import { PublicLayoutNavComponent } from '../nav/nav.component';
import { Language, SettingsFacade, APP_LANGUAGES } from '@domains/settings';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-layout-header',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    UiLangPickerComponent,
    PublicLayoutNavComponent
  ],
  templateUrl: './header.component.html'
})
export class PublicLayoutHeaderComponent {
  @Input({ required: true }) sidenav!: MatDrawer;
  language$ = this.settingsFacade.language$;
  languages = APP_LANGUAGES;

  constructor(private settingsFacade: SettingsFacade) {}
  useLanguage(lang: Language) {
    this.settingsFacade.useLanguage(lang);
  }
}
