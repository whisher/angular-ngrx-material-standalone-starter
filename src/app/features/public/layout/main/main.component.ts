import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PublicLayoutFooterComponent } from '../footer/footer.component';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-layout-main',
  standalone: true,
  imports: [RouterOutlet, PublicLayoutFooterComponent],
  templateUrl: './main.component.html'
})
export class PublicLayoutMainComponent {}
