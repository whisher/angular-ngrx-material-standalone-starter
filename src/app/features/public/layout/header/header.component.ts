import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-layout-header',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class PublicLayoutHeaderComponent {
  navigation = [
    { link: '/home', label: 'home' },
    { link: '/login', label: 'login' },
    { link: '/admin', label: 'admin' }
  ];
}
