import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AccountFacade } from '@domains/account';
import { AdminLayoutFooterComponent } from '../footer/footer.component';
import { AdminLayoutHeaderComponent } from '../header/header.component';
import { AdminLayoutNavComponent } from '../nav/nav.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-layout-main',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    MatSidenavModule,
    AdminLayoutFooterComponent,
    AdminLayoutHeaderComponent,
    AdminLayoutNavComponent
  ],
  templateUrl: './main.component.html'
})
export class AdminLayoutMainComponent {
  account$ = this.accountFacade.data$;
  opened = true;
  constructor(private accountFacade: AccountFacade) {}
}
