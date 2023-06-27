import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { MatCardModule } from '@angular/material/card';

import { untilDestroyed } from '@shared/utils/destroy';
import { LoginRequestDto } from '@api/models';
import { AccountFacade } from '@domains/account';
import { AuthFacade, AuthStatus } from '@domains/auth';
import { PublicLoginFormComponent } from '../form/form.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-login-main',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, PublicLoginFormComponent],
  templateUrl: './main.component.html'
})
export class PublicLoginMainComponent implements OnInit {
  private untilDestroyed = untilDestroyed();
  status$: Observable<AuthStatus> = this.authFacade.status$;
  constructor(private accountFacade: AccountFacade, private authFacade: AuthFacade) {}
  ngOnInit() {
    this.authFacade
      .OnLoginSuccess()
      .pipe(this.untilDestroyed())
      .subscribe(() => {
        this.accountFacade.load();
      });
  }
  onSubmit(credentials: LoginRequestDto) {
    this.authFacade.login(credentials);
  }
}
