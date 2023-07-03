import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-admin-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html'
})
export class AdminUsersComponent {}
