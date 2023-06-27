import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthFacade } from '@domains/auth';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-logout',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  template: `
    <div class="min-h-screen flex justify-center items-center bg-white">
      <mat-spinner></mat-spinner>
    </div>
  `
})
export class LogoutComponent implements OnInit {
  constructor(private authFacade: AuthFacade) {}
  ngOnInit() {
    this.authFacade.logout();
  }
}
