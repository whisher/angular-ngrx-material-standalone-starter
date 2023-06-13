import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-layout-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class PublicLayoutHeaderComponent {}
