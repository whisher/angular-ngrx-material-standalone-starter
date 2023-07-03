import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AdminLayoutFooterComponent } from '../footer/footer.component';
import { AdminLayoutHeaderComponent } from '../header/header.component';
import { AdminLayoutNavComponent } from '../nav/nav.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-layout-main',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    AdminLayoutFooterComponent,
    AdminLayoutHeaderComponent,
    AdminLayoutNavComponent
  ],
  templateUrl: './main.component.html'
})
export class AdminLayoutMainComponent {
  opened = true;
}
