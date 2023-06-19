import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

import { PublicLayoutFooterComponent } from '../footer/footer.component';
import { PublicLayoutHeaderComponent } from '../header/header.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-layout-main',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    PublicLayoutFooterComponent,
    PublicLayoutHeaderComponent
  ],
  templateUrl: './main.component.html'
})
export class PublicLayoutMainComponent {}
