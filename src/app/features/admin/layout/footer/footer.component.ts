import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-admin-layout-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html'
})
export class AdminLayoutFooterComponent {
  copyright = new Date().getFullYear();
}
