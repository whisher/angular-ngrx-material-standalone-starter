import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { PublicLoginFormComponent } from '../form/form.component';
import { LoginRequestDto } from '@api/models';
import { AuthFacade, AuthStatus } from '@domains/auth';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-login-main',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, PublicLoginFormComponent],
  templateUrl: './main.component.html'
})
export class PublicLoginMainComponent {
  status$: Observable<AuthStatus> = this.authFacade.status$;
  constructor(private authFacade: AuthFacade) {}
  onSubmit(credentials: LoginRequestDto) {
    this.authFacade.login(credentials);
  }
}
