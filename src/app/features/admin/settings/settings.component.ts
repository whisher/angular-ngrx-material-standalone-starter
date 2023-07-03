import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-admin-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html'
})
export class AdminSettingsComponent {}
