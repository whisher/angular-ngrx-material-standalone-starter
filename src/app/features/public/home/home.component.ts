import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-home',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.component.html'
})
export class PublicHomeComponent {}
