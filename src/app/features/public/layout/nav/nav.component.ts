import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-layout-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html'
})
export class PublicLayoutNavComponent {}
