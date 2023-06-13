import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export class PublicHomeComponent {}
