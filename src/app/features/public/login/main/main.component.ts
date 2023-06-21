import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PublicLoginFormComponent } from '../form/form.component';
import { LoginRequestDto } from '@api/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-login-main',
  standalone: true,
  imports: [MatCardModule, PublicLoginFormComponent],
  templateUrl: './main.component.html'
})
export class PublicLoginMainComponent {
  status = true;
  onSubmit(credentials: LoginRequestDto) {
    console.log(credentials);
  }
}
