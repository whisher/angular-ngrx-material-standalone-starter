import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html'
})
export class PublicAboutComponent {}
