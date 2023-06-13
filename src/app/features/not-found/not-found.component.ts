import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {}
