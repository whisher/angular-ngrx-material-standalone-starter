import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-layout-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html'
})
export class PublicLayoutFooterComponent {}
