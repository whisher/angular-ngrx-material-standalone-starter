import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { untilDestroyed } from '@shared/utils/destroy';
import { SettingsFacade } from '@domains/settings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private untilDestroyed = untilDestroyed();
  language$ = this.settingsFacade.language$;

  constructor(private translate: TranslateService, private settingsFacade: SettingsFacade) {}
  ngOnInit(): void {
    this.language$
      .pipe(this.untilDestroyed())
      .subscribe((lang) => this.translate.setDefaultLang(lang));
  }
}
