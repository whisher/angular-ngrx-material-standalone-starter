import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-layout-nav',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html'
})
export class PublicLayoutNavComponent {
  navigation = [
    { link: '/home', label: 'home' },
    { link: '/login', label: 'login' },
    { link: '/admin', label: 'admin' }
  ];
}
